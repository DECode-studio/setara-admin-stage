'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js": "a3e8b6ab1647db68a706a476bdc444d9",
"version.json": "c4bf05b3b4b3c07cd4f7676483fb4494",
"assets/assets/images/logo/logo_app.png": "21589b55a07797daf04fab0e230d91bc",
"assets/assets/images/logo/logo_app_outline.png": "015a3d8691d0e9a69337722982ac10b8",
"assets/assets/images/logo/icon_app.png": "8993b082f7013ec8ed570c6f9c2b6846",
"assets/assets/images/logo/setara_load.gif": "2113d451418662e34ceb89174923c9c9",
"assets/assets/images/logo/icon_app_trial.png": "bc042b853cac187de46921c2353e4ea7",
"assets/assets/images/e-wallet/dana_logo.jpeg": "dc4b1fd98721b8dca283668f7f585920",
"assets/assets/images/e-wallet/linkaja_logo.png": "4d80c5835551bb0e0a0cf0b0fbaa9503",
"assets/assets/images/e-wallet/ovo_logo.png": "1a62aa1c175a7bb8ce2aaeb1aef6b2c4",
"assets/assets/images/e-wallet/qris_logo.png": "cd1b3535ab5c0248b0cd38f1ea11b397",
"assets/assets/images/e-wallet/shopeepay_logo.png": "ce0617bd49956eb1e3065f604cdc2a59",
"assets/assets/images/vector/adult_image.png": "948c29ae2b04fcfcca387b5e5aa9c896",
"assets/assets/images/vector/bg_faq.png": "bd2744d88ebcbe7101d3ea50288eedcc",
"assets/assets/images/vector/bg_login.png": "8819d8d531f29ace0f6a085a385d0081",
"assets/assets/images/vector/bg_maintenance.png": "e1774d8dac28bd9ed7cf68181538a9f4",
"assets/assets/images/vector/bg_payment.gif": "bfb087f54479a965882475226daaf3ff",
"assets/assets/images/vector/check_anim.gif": "2d8442209861bdd630e780fe9f07c749",
"assets/assets/images/vector/closed.png": "f12359122640a0bf86162f34a0148bb4",
"assets/assets/images/vector/nft.png": "b390c5b0fbcb29631e8d468bbae17ce8",
"assets/assets/images/vector/nft_comming_soon.gif": "e03711de5fbe62863777023a53260b79",
"assets/assets/images/vector/no_data.png": "adc81dc476905a850be6e58b4ae1ad53",
"assets/assets/images/vector/sold_out.png": "e2c419ede3bc5dcf95b06b52db9d01d9",
"assets/assets/images/background/background_app.png": "baa3e5e8687dc087bcf2d25571690e1f",
"assets/assets/audio/event_channel.mp3": "9a2c6a602024f50f53644a106fae4632",
"assets/assets/audio/transaction_channel.mp3": "f728c96a3c453aeb61bb8b4b83d16338",
"assets/assets/audio/info_channel.mp3": "3cc4bba66e6b9360006fec55c6f63746",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c935e586e4803be1b9218357f0876b0a",
"assets/packages/flutter_phosphor_icons/fonts/Phosphor.ttf": "ae434202ddb6730654adbf02f8f3bc5d",
"assets/fonts/MaterialIcons-Regular.otf": "ae2e322c5e1c2b14ab682f7daf8aa40c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.json": "2b9f6178a2eccf6757b86c12ebb61531",
"assets/AssetManifest.bin": "9a3f1fd7b163ad25dc8e9fa57c54be00",
"assets/FontManifest.json": "d7266237a95d15602862054c788dea8b",
"assets/NOTICES": "99b62dacccc6b6fb359d5228952d573d",
"index.html": "6bf5962866c8ee2fa01a24151d91b6bc",
"/": "6bf5962866c8ee2fa01a24151d91b6bc",
"favicon.png": "0efb041fe3baef77cc7c7a5291aadf61",
"manifest.json": "33cfd010e633a178c529bdc0ce0dd8e8",
"icons/Icon-192.png": "33e897d1368879e795b14fc168d909a2",
"icons/Icon-512.png": "67682152f0fa75917e917207b02703e8",
"icons/Icon-maskable-192.png": "33e897d1368879e795b14fc168d909a2",
"icons/Icon-maskable-512.png": "67682152f0fa75917e917207b02703e8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "99cd723bee4a9877a77424a4c841af72",
".git/refs/remotes/origin/main": "99cd723bee4a9877a77424a4c841af72",
".git/objects/1a/9f6f7147497169ef3e56fcf6327394d38a2cb5": "c21f781e5a1c5bbd24479faba592b1ee",
".git/objects/1a/546a8dd90cd7c8fb152df527eec6b866a7d669": "28040f6158d74f5e2bbe201df8444d22",
".git/objects/24/476c5d1eb55824c76d8b01a3965f94abad1ef8": "272edacb42df12790f46462d08bc4696",
".git/objects/10/5d97a36855a4ad68ca3593b6fc5b540cd5c7b4": "fde1b5ecab92853d69f88e87163ea95f",
".git/objects/02/9f5ec098d985e6b2ead4103461c1b22def2180": "6d64bbbbc73b4f4c14e5b7f48fb2f42e",
".git/objects/02/e2e2dab4628586e3d3363331bdccdd35a1b9ef": "da87907c9818433dc79ea16624655f0e",
".git/objects/f3/d7c5c4994df56823a04c5a4b941148795c8f3d": "9cc02dcaa97774171cbb717a4131eb8b",
".git/objects/95/48f7e2406c22e219eb42395ae291854ec3515c": "41783fd132a5d34a586b304a6dca795d",
".git/objects/67/cb1ce22ffc265d70b5b395962cb66b7e6ac77b": "040004dbe50f8196fb8bc99335c6a618",
".git/objects/67/d6c6dd4906de9526285deb00c8ea93bb845fe3": "60cff6a54eb878f7c8f9e45554c43d4d",
".git/objects/f9/72e6dfcd7795a80839ed47669b26755e4b58e0": "e4b8871229d8c0d9fa417826589f57b2",
".git/objects/ff/332e83cd9f7b84a0d5c785054f36d076193864": "572d4e574ade9cd500bf144de23e1195",
".git/objects/2f/8ee829e435a568a00f3f6794bc9cfb00f84e7d": "70cf80461272ec83b2730107e83125ef",
".git/objects/d3/ae4bebbd6b096400897f6482ab45d7921f7c56": "c7942bf9a76299a61712b43b2bd4bc92",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/16/dee8f85fa4e950c97e2e263330d9956eb2269f": "b9f6edca1c1d1073b1074749283fcfc3",
".git/objects/16/525ec334bc11428b87a332f13ab325218543f2": "7017985c4ca8fc7d3d5859cbfab7897c",
".git/objects/9b/13c66174c3fdcfed11aa96bf54dcdf183ee851": "b8971b7f8e2748de57fa199fac8ce20f",
".git/objects/51/501e202b7704b6c26e0a8eec01c1b6febb9b89": "b09a2e6cbb504c6cfce2ae2469ae6fbb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5b/f4d358b2bb34d9bd9a8a75ebf4ae82fbe3995f": "d6d1aa5444b61598263521333bf8999d",
".git/objects/5b/b2f1f7c6e60b5dea13da56cdede94bf3df5bac": "a414a15d099f8dbc17687473fad94adc",
".git/objects/50/bb0e44b793cededa6088c410c285f4b11791bf": "38eee6cbe2aa16cd41dcf8f084a5cd79",
".git/objects/c6/2677be4fbe71b983f04c30c1553cc74388dd8c": "c011febf76245456cd8fda5bf6de36f9",
".git/objects/c6/63a9c0cde614702b1d6aa8b8370074927fe42e": "788efcde50d3618d289e81e7e596fc6f",
".git/objects/a4/30a6e4cae5f7d811db22b85f5afa915b442bb7": "adf96227cdeba809725cd69d9dc81826",
".git/objects/a4/c4cbfc409dd99d816504f2595a56a62f5cd1ae": "d0474c2201942e1a0a31c1a945e9e190",
".git/objects/a4/27a509105ae9cf6a8a4e7a3d0a26bb5806e293": "605d33a0748c9b54539157997b81d146",
".git/objects/06/0a6daeca21c6a333d473600c8d53fa50752c4a": "8b9e56be9bf2ee8ba05ba1e937863c00",
".git/objects/46/2c0859eb0210d9af8a0d952351eff6249de5df": "81b68e2a49b7248dc84c6b4af882a245",
".git/objects/46/844c409b4ade2987678ab903d476c34532470a": "1eaade20e1d3d7a046bb756f2f6b2da7",
".git/objects/bc/f2324448ccf591fa772a09953bca11aa2ec86e": "44bf823c2c4387c7a80b9523676dcaca",
".git/objects/a9/370de832e7f9e4c708844e2ece7edfd2ecdf75": "894f19600d25a3ee055fd88cfe27d301",
".git/objects/94/eb7a75d208322f317d0c3ce33eedf318aeb271": "850f83559d68641379bdc410fb4efb18",
".git/objects/1c/41d1bd54999c724508e479632f7539f78eaa2e": "0b626d7d42678c99663b3180d4537ed4",
".git/objects/8b/405558d78f3f7a9832006b2766c69301dc91e1": "c350fd1deae9a73902ef54cc0fe0fea4",
".git/objects/66/19a52493f901653fb40e74788afa74167f2375": "79063902e36ae2a662b3ec1127472190",
".git/objects/d9/ddc213b322dc43de5314abd105e95a991cf62a": "5d7a53192982de6952a95932b473429f",
".git/objects/32/985e364badc445bde11d5a69a14549e16810ed": "258b3155d94a3afb3445ff4d7b24f292",
".git/objects/bf/e317b19ecb128892de88a03547ec583a353f9d": "a3adf076b84315dcaf7b8a654914f79b",
".git/objects/a6/f51c323629142eade9004dc6e1e6ccdc414520": "cc58b889e12c9157c86c994df2863030",
".git/objects/61/41dd3e5155ee3ba5752e07eb2b4529df74f944": "ad391a3b688559902f0ba678668d9a6d",
".git/objects/76/c98ce913e307c4666feff72e4ce6deeaab5923": "d8e732de2868cd4fe7f34f6f43973b4a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/5456e23f0c0cfc2d6bd1b9842b669bf7049cfa": "03c70210f79bb7778264296939af39dc",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/fab897a41966cb2cb2aa67a01ea0485d6f9abc": "d8af0bb62e2029e2855886bd21d0da75",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/14c5a2805fef67970a19380c80ce90f29606a5": "03a91655218aee8d5683f5867f88a2eb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/df6c1e8afa2068beac58f8f30064b22dd47374": "1a90cfac3db063a1d2a9219e449cc86b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/aad19a9d5b2fd2cd1d2525aad4c0bcd22ca95c": "2deb99c85b54cdc5edcf18df2bdddb0e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a3/9445d5c6aa3127f85006164e0c4a42e0ffecca": "1950d408252fd5e9c4922eaed255cd89",
".git/objects/5f/26b54fbc933d50b54445a4f562e45f79f55a95": "847cafe093dbab28d407c02c26d58a58",
".git/objects/e3/0cd7bd6ada0de7ff501bb92c362d1201d1f394": "77d371ef38eb6d53391d0e6d115e4659",
".git/objects/58/dc0497babc1bef79736b0f61f10a978864d90f": "84eaa847d0a2ad5837cda057326688f2",
".git/objects/4a/2b29ed8f45478c60cec89276d72795681e8d5a": "5c8d24a554386fd3b3b9109414d7fecf",
".git/objects/7d/8e7373e1985ab866b3cdde1f9b2a64815142dd": "006965a12f2021fc0020ff1396581034",
".git/objects/79/04dba381de6b32da52aec5e4ead3e398a7035d": "8d56b52c666bad33ccaca4def0e5217a",
".git/objects/29/18b3ba9e2cbf80b1ceb18cd71f8409f8d19f1c": "904b7a054c47609a48e5bbcd91ce746d",
".git/objects/1d/06810e6b82e8c519b81325e864d5de34f723b4": "3538afc6cf0d7f3ac608bfc668db7cd6",
".git/objects/6e/8880961ac910a7cff9655c431de5826d3b767a": "2e713f7f5819e2e191df33cbb561aa03",
".git/objects/c2/85b88c3eac5d71e4fde7cb4fb7cebde261cf15": "aa4f2b627f97eaa77b0f22b76b6221e8",
".git/objects/8f/4f92991981779451db250aae4477384f02d3d5": "6e73bc7c8b6a8cbe8adf2ecf5c1eeb45",
".git/objects/b9/398c2cc855146c0e51b9868f6568635d4208d7": "58266f10e17cea4edd6c4ef7d360da59",
".git/objects/80/c9799723526ba0c61587b8f3cecbb6b60f432d": "03231ca7403eb744b9d5e0fd8bb3b71b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/22/af52e47fadfe3e4455d65e6d7ec51d9690c8c0": "f23f5b6f5548f29fd6508e81f3175c35",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/d0/8fa0f3cf8dc578aae0c09ee655a67ffc3e821b": "abd65c62db493bbe7e0c58cb12e55e09",
".git/objects/33/767986f90d23f04406289d6ccdff2fa08c0c15": "eb13a044ac0737bafe21e0ccd2fb26ab",
".git/objects/33/eba3261134ee0fcdf9ec4ed59f447d5f082a01": "0b3b2ff10d35b2ee49cfe778fcec2476",
".git/objects/ed/1a261910f9c3f35d5e417ccb3631525023e9e5": "6a2145058348b1d4756ec36418f7e506",
".git/objects/ad/ca05570e2a9179e646deca37c5661db76fa026": "f660de5954a4ed561803db6fc160c886",
".git/objects/ad/68449cf8d20cc840dceb7b92fe74c5c71ecca3": "50955c68e66b8f99f2806424be6e99aa",
".git/objects/f1/79f395ca6bd013e62d585f4b5ed5c25679f175": "cc15cfd4e6421d70010264a421625b37",
".git/objects/ec/a4ec9aa8605878598e9999422ed548ff43ad2d": "ed62dd257f091e182e17b509ca8f64eb",
".git/objects/4e/0f098baf2f809bff44f7a7178bf686256c2ed7": "04fee80ff1d345731c33b72e09bd8092",
".git/objects/fe/e3affd10b8df41edb9bf89793440dc53c9f26f": "8dcf5d280dfb97230fba6dcccdff5705",
".git/objects/b3/acc76eae9aab49580196438044f585860264ea": "7c74d05b418b694ec774ad16d483a2e5",
".git/objects/3e/adcad8c2accc190d0b8dc132f5c8fc727143ed": "bf9466a253e625e77f980d70e55cbc2d",
".git/objects/9f/81af2dd7dbbd8ace283adb4bb14046690368f5": "1265060e9c4acd33b9b7417e46e5af64",
".git/objects/72/1a9a8be6c5fd2344216e7627c92166bfcaa80d": "081b84378171d838df3843dc9e686948",
".git/objects/ab/de5c91cf7846a339971e6544da4f8df6a50682": "c5d0408a14b25723c51d53a85bd73367",
".git/objects/19/4595879747978572ff1f8ce34d62fb4a7c48c9": "55746615b0401860e11482b88a9fbf6b",
".git/objects/53/6f492f3e644845670ab8685ada798573d7a1fe": "df90b7afc2d42fa30a835b58f58ca436",
".git/objects/68/7484ce7bd2c0f4f1870f0f0bf2c21146e1a5e9": "172a73f2d0cfea64f8ee3dde9e3b2c8b",
".git/objects/de/72a1b263160046a4bf8e556859f9ffd18dfbbd": "568db8186d70b09fc5342099101736e4",
".git/objects/9a/bf756e463fcf165e5f999ed352a1d75c78b0b9": "e3619f5ffff87329676ae8beda2bc7bf",
".git/COMMIT_EDITMSG": "219c31b27838c12b0d754031561a8c1d",
".git/config": "7bc3b35efc46ec68429dece5cbed9880",
".git/ORIG_HEAD": "1f96a3585f2fafce9d26a2df79cb21ea",
".git/logs/HEAD": "e30464649c700cc3b84517e53b142cb6",
".git/logs/refs/heads/main": "269e120435bcffbb3130b0e2232df45b",
".git/logs/refs/remotes/origin/main": "5a59b1937b54e55b44776e44becda08e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "e2fbb5bee9e2745d76284fb6256ef9a6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
