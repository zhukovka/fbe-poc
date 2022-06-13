var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const url = `https://facebook.com/dialog/oauth?
client_id=738597050496771
&display=popup
&redirect_uri=https://localhost:3000/redirect/
&response_type=code
&scope=manage_business_extension
&extras={
  "setup": {
    "external_business_id": "foo-123",
    "timezone": "America/Los_Angeles",
    "currency": "USD",
    "business_vertical": "APPOINTMENTS"
  },
  "business_config": {
    "business": {
      "name": "Foo Business"
    },
    "page_cta": {
      "enabled": true,
      "cta_button_text": "Book Now",
      "cta_button_url": "https://www.fbepoc.com/",
      "below_button_text": "Powered by FBE Partner"
    },
    "ig_cta": {
      "enabled": true,
      "cta_button_text": "Book Now",
      "cta_button_url": "https://www.fbepoc.com/"
    }
  },
  "repeat": false
}`
  res.send(`<html>
<head>
  <title>FB POC</title>
</head>

<body>
  <h1>FB POC</h1>
  <br>
  <a href='${url}'>FB Business login</a>
</body>

</html>`);
});

router.get('/redirect', function(req, res, next) {
  res.send('FB redirect');
});

module.exports = router;
