<div id={uniqueId}></div>
<script>
  import { onMount } from 'svelte';

  // Add props for product ID and button text
  export let productId;
  export let buttonText = 'Buy';  // Default value is 'Buy'

  // Generate unique ID for each button instance
  const uniqueId = `product-component-${Math.random().toString(36).substr(2, 9)}`;

  onMount(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    function loadScript() {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      const client = ShopifyBuy.buildClient({
        domain: 'gutbubbel-ug.myshopify.com',
        storefrontAccessToken: '183981669ddbab8b07a998a5712a5b5e',
      });

      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: productId,
          node: document.getElementById(uniqueId),
          moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  "font-family": "Pressura, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  "font-size": "18px",
                  "padding-top": "17px",
                  "padding-bottom": "17px",
                  "border-radius": "0px",
                  "background-color": "white",
                  "color": "#000000",
                  "border": "1px solid #d2d2d2",
                  ":hover": {
                    "background-color": "white",
                    "border": "1px solid #000000"
                  },
                  ":focus": {
                    "background-color": "white",
                    "border": "1px solid #000000"
                  }
                },
                "quantityInput": {
                  "font-size": "18px",
                  "padding-top": "17px",
                  "padding-bottom": "17px"
                }
              },
              "buttonDestination": "cart",
              "contents": {
                "title": false,
                "price": false,
                "options": false,
                "description": false,
                "img": false,
                "button": true,
                "buttonWithQuantity": false
              },
              "text": {
                "button": buttonText
              },
              "googleFonts": [
                "Roboto"
              ]
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "font-family": "Roboto, sans-serif",
                  "font-size": "18px",
                  "padding-top": "17px",
                  "padding-bottom": "17px",
                  ":hover": {
                    "background-color": "#e60000"
                  },
                  "background-color": "#ff0000",
                  ":focus": {
                    "background-color": "#e60000"
                  }
                },
                "quantityInput": {
                  "font-size": "18px",
                  "padding-top": "17px",
                  "padding-bottom": "17px"
                }
              },
              "googleFonts": [
                "Roboto"
              ],
              "text": {
                "button": "Add to cart"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Pressura, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  "font-size": "18px",
                  "padding-top": "17px",
                  "padding-bottom": "17px",
                  "border-radius": "0px",
                  "background-color": "#000000",
                  ":hover": {
                    "background-color": "#000000"
                  },
                  ":focus": {
                    "background-color": "#000000"
                  }
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "popup": true
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Pressura, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  "background-color": "#000000",
                  "border-radius": "0px",
                  ":hover": {
                    "background-color": "#000000"
                  },
                  ":focus": {
                    "background-color": "#000000"
                  }
                },
                "count": {
                  "font-size": "18px",
                  "color": "#ffffff"
                }
              }
            }
          }
        });
      });
    }

    // Initialize
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  });
</script>