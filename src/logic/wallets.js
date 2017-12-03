const crypto = require("crypto");

const bip39 = require("bip39");
const nacl_factory = require("js-nacl");
const bignum = require("browserify-bignum");

const buffLength = 8;

export const generateWallet = cb => {
  let onNaclReady = nacl => {
    let mnemonicToData = passphrase => {
      if (!passphrase) {
        passphrase = bip39.generateMnemonic();
      }

      if (!bip39.validateMnemonic(passphrase)) {
        return { error: true, reason: "Passphrase not valid" };
      }

      let hash = crypto
        .createHash("sha256")
        .update(passphrase, "utf8")
        .digest();

      let kp = nacl.crypto_sign_keypair_from_seed(hash);
      let publicKey = new Buffer(kp.signPk);
      let privateKey = new Buffer(kp.signSk);

      let getAddress = function(publicKey) {
        let hash = crypto.createHash("sha256").update(publicKey).digest();
        let buff = new Buffer(buffLength);

        for (let i = 0; i < buffLength; i++) {
          buff[i] = hash[7 - i];
        }

        return bignum.fromBuffer(buff).toString() + "L";
      };

      return {
        passphrase,
        hash: hash.toString("hex"),
        address: getAddress(publicKey),
        publicKey: publicKey.toString("hex"),
        privateKey: privateKey.toString("hex"),
        entropy: bip39.mnemonicToEntropy(passphrase),
        seed: bip39.mnemonicToSeedHex(passphrase)
      };
    };

    return mnemonicToData();
  };

  nacl_factory.instantiate(function(nacl) {
    cb(onNaclReady(nacl));
  });
};
