//Set Up for Moralis API Rate Limits!

Moralis.settings.setAPIRateLimit({
    anonymous:5000, authenticated:10000, windowMs:60000
  })