"use strict";

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        id: "a07b780e-2941-4436-996b-9778fc9658b2",
        name: "Huutokoski kalastusluvat 2017",
        prices: [
          {
            price: "23 €/24 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          {
            price: "35 €/viikko",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          {
            price: "100 €/vuosi",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          }
        ],
        address: "Huutokoski ",
        gdata: {
          results: [
            {
              address_components: [
                {
                  long_name: "Huutokoski",
                  short_name: "Huutokoski",
                  types: ["locality", "political"]
                },
                {
                  long_name: "Finland",
                  short_name: "FI",
                  types: ["country", "political"]
                },
                {
                  long_name: "79620",
                  short_name: "79620",
                  types: ["postal_code"]
                }
              ],
              formatted_address: "79620 Huutokoski, Finland",
              geometry: {
                location: { lat: 62.2123277, lng: 27.6892106 },
                location_type: "APPROXIMATE",
                viewport: {
                  northeast: { lat: 62.21752909999999, lng: 27.705218 },
                  southwest: { lat: 62.2071254, lng: 27.6732032 }
                }
              },
              place_id: "ChIJA8f4uzvamkYRICiSuVO1AAo",
              types: ["locality", "political"]
            }
          ],
          status: "OK"
        }
      },
      {
        id: "55821d17-847f-4ebf-9da5-5f74320556a4",
        name: "Kuusoja kalastusluvat 2017",
        prices: [
          { price: "10 €/24 tuntia", type: "1.6. - 31.8., Kaikki" },
          { price: "25 €/kausi", type: "1.6. - 31.8., Kaikki" }
        ],
        address: "Kuusoja ",
        gdata: {
          results: [
            {
              address_components: [
                {
                  long_name: "Kuusoja",
                  short_name: "Kuusoja",
                  types: ["establishment", "natural_feature"]
                },
                {
                  long_name: "Finland",
                  short_name: "FI",
                  types: ["country", "political"]
                }
              ],
              formatted_address: "Kuusoja, Finland",
              geometry: {
                bounds: {
                  northeast: { lat: 62.8260029, lng: 30.05105 },
                  southwest: { lat: 62.76060069999999, lng: 29.998697 }
                },
                location: { lat: 62.79330179999999, lng: 30.0248735 },
                location_type: "APPROXIMATE",
                viewport: {
                  northeast: { lat: 62.8260029, lng: 30.05105 },
                  southwest: { lat: 62.76060069999999, lng: 29.998697 }
                }
              },
              place_id: "ChIJ9-gBDQJ7nEYR2XL6urc6oXo",
              types: ["establishment", "natural_feature"]
            }
          ],
          status: "OK"
        }
      },
      {
        id: "88edcb00-29de-41df-9458-fba449f408dc",
        name: "Keyrityn-Puntinjoki kalastusluvat 2017",
        prices: [
          {
            price: "15 €/24 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          {
            price: "30 €/viikko",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          { price: "60 €/vuosi", type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki" }
        ],
        address: "Keyrityn-Puntinjoki ",
        gdata: {
          error_message:
            "You have exceeded your daily request quota for this API. We recommend registering for a key at the Google Developers Console: https://console.developers.google.com/apis/credentials?project=_",
          results: [],
          status: "OVER_QUERY_LIMIT"
        }
      },
      {
        id: "da3166a0-36ec-4fe2-874e-d6edc96973c7",
        name: "Heijostenkoski kalastuslupa 2017",
        prices: [
          { price: "25 €/24 tuntia", type: "Kesäkausi 1.5. - 31.7., Kaikki" },
          { price: "130 €/kausi", type: "Koko vuosi , Kaikki" },
          { price: "200 €/kausi", type: "Koko vuosi , Kaikki" }
        ],
        address: "Heijostenkoski ",
        gdata: {
          results: [
            {
              address_components: [
                {
                  long_name: "Karstula",
                  short_name: "Karstula",
                  types: ["locality", "political"]
                },
                {
                  long_name: "Finland",
                  short_name: "FI",
                  types: ["country", "political"]
                },
                {
                  long_name: "43480",
                  short_name: "43480",
                  types: ["postal_code"]
                }
              ],
              formatted_address: "43480 Karstula, Finland",
              geometry: {
                location: { lat: 62.74812550000001, lng: 24.8898057 },
                location_type: "GEOMETRIC_CENTER",
                viewport: {
                  northeast: {
                    lat: 62.74947448029151,
                    lng: 24.8911546802915
                  },
                  southwest: { lat: 62.7467765197085, lng: 24.8884567197085 }
                }
              },
              place_id: "ChIJt2ZxgrXRhUYRaIjz9Y3hLiY",
              types: ["establishment", "point_of_interest"]
            }
          ],
          status: "OK"
        }
      },
      {
        id: "689f2101-c570-406c-a9ec-ddd89088bc75",
        name: "Hilmonjoki kalastusluvat 2017",
        prices: [
          {
            price: "5 €/6 tuntia",
            type: "Kesäkausi 1.5.-30.8.2015, Alle 15 v."
          },
          {
            price: "10 €/24 tuntia",
            type: "Kesäkausi 1.5.-30.8.2015, Alle 15 v."
          },
          { price: "75 €/kausi", type: "Kesäkausi 1.5.-30.8.2015, Alle 15 v." },
          { price: "10 €/6 tuntia", type: "Kesäkausi 1.5.-30.8.2015, Kaikki" },
          { price: "15 €/12 tuntia", type: "Kesäkausi 1.5.-30.8.2015, Kaikki" },
          { price: "20 €/24 tuntia", type: "Kesäkausi 1.5.-30.8.2015, Kaikki" },
          { price: "150 €/kausi", type: "Kesäkausi 1.5.-30.8.2015, Kaikki" }
        ],
        address: "Hilmonjoki ",
        gdata: {
          results: [
            {
              address_components: [
                {
                  long_name: "Hilmonjoki",
                  short_name: "Hilmonjoki",
                  types: ["establishment", "natural_feature"]
                },
                {
                  long_name: "Kannonkoski",
                  short_name: "Kannonkoski",
                  types: ["administrative_area_level_3", "political"]
                },
                {
                  long_name: "Finland",
                  short_name: "FI",
                  types: ["country", "political"]
                },
                {
                  long_name: "43300",
                  short_name: "43300",
                  types: ["postal_code"]
                }
              ],
              formatted_address: "Hilmonjoki, 43300 Kannonkoski, Finland",
              geometry: {
                bounds: {
                  northeast: { lat: 63.0008577, lng: 25.3647417 },
                  southwest: { lat: 62.97986839999999, lng: 25.3405104 }
                },
                location: { lat: 62.99036299999999, lng: 25.352626 },
                location_type: "APPROXIMATE",
                viewport: {
                  northeast: { lat: 63.0008577, lng: 25.3647417 },
                  southwest: { lat: 62.97986839999999, lng: 25.3405104 }
                }
              },
              place_id: "ChIJFfOHHZIwhEYRLNHO7YzUa8Q",
              types: ["establishment", "natural_feature"]
            }
          ],
          status: "OK"
        }
      },
      {
        id: "3fd219e7-7366-41ec-aa97-a2046e823484",
        name: "Ohtaoja kalastusluvat 2017",
        prices: [
          { price: "15 €/24 tuntia", type: "Kesäkausi 1.5.-30.9., Kaikki" },
          { price: "45 €/viikko", type: "Kesäkausi 1.5.-30.9., Kaikki" },
          { price: "90 €/kausi", type: "Kesäkausi 1.5.-30.9., Kaikki" }
        ],
        address: "Ohtaoja ",
        gdata: {
          results: [
            {
              address_components: [
                {
                  long_name: "Ohtaoja",
                  short_name: "Ohtaoja",
                  types: ["establishment", "natural_feature"]
                },
                {
                  long_name: "Taivalkoski",
                  short_name: "Taivalkoski",
                  types: ["administrative_area_level_3", "political"]
                },
                {
                  long_name: "Finland",
                  short_name: "FI",
                  types: ["country", "political"]
                },
                {
                  long_name: "93400",
                  short_name: "93400",
                  types: ["postal_code"]
                }
              ],
              formatted_address: "Ohtaoja, 93400 Taivalkoski, Finland",
              geometry: {
                bounds: {
                  northeast: { lat: 65.6499559, lng: 28.0717395 },
                  southwest: { lat: 65.6017009, lng: 28.0230141 }
                },
                location: { lat: 65.6258284, lng: 28.0473768 },
                location_type: "APPROXIMATE",
                viewport: {
                  northeast: { lat: 65.6499559, lng: 28.0717395 },
                  southwest: { lat: 65.6017009, lng: 28.0230141 }
                }
              },
              place_id: "ChIJq2noJE3UK0QR3AXMnvi_Bx8",
              types: ["establishment", "natural_feature"]
            }
          ],
          status: "OK"
        }
      },
      {
        id: "d55569ec-fba4-4b6b-852f-2755b9cdd87a",
        name: "Rävykoski kalastusluvat 2017",
        prices: [
          {
            price: "7 €/6 tuntia",
            type:
              "Koko vuosi 1.5.(klo12:00)-10.9. ja 16.11. - 15.4., Alle 16 v."
          },
          {
            price: "13 €/24 tuntia",
            type:
              "Koko vuosi 1.5.(klo12:00)-10.9. ja 16.11. - 15.4., Alle 16 v."
          },
          {
            price: "14 €/6 tuntia",
            type: "Koko vuosi 1.5.(klo12:00)-10.9. ja 16.11. - 15.4., Kaikki"
          },
          {
            price: "26 €/24 tuntia",
            type: "Koko vuosi 1.5.(klo12:00)-10.9. ja 16.11. - 15.4., Kaikki"
          }
        ],
        address: "Rävykoski ",
        gdata: {
          error_message:
            "Invalid request. One of the input parameters contains a non-UTF-8 string.",
          results: [],
          status: "INVALID_REQUEST"
        }
      },
      {
        id: "16abe859-e5ec-463c-b4ae-ad6c549f29b5",
        name: "Majakoski kalastuslupa 2017",
        prices: [
          {
            price: "14,19 €/24 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Alle 18 v."
          },
          {
            price: "14,19 €/12 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          {
            price: "19,78 €/24 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          }
        ],
        address: "Majakoski ",
        gdata: {
          results: [
            {
              address_components: [
                { long_name: "5", short_name: "5", types: ["street_number"] },
                {
                  long_name: "Kankaanpäänranta",
                  short_name: "Kankaanpäänranta",
                  types: ["route"]
                },
                {
                  long_name: "Jyväskylä",
                  short_name: "Jyväskylä",
                  types: ["locality", "political"]
                },
                {
                  long_name: "Finland",
                  short_name: "FI",
                  types: ["country", "political"]
                },
                {
                  long_name: "40660",
                  short_name: "40660",
                  types: ["postal_code"]
                }
              ],
              formatted_address: "Kankaanpäänranta 5, 40660 Jyväskylä, Finland",
              geometry: {
                location: { lat: 62.27717560000001, lng: 25.6229842 },
                location_type: "ROOFTOP",
                viewport: {
                  northeast: {
                    lat: 62.27852458029151,
                    lng: 25.6243331802915
                  },
                  southwest: { lat: 62.2758266197085, lng: 25.62163521970849 }
                }
              },
              place_id: "ChIJX5DtOCCehUYRK8qZqGSPjCE",
              types: ["establishment", "point_of_interest"]
            }
          ],
          status: "OK"
        }
      },
      {
        id: "53494d10-d9bd-457b-8a3b-d4516050ddf1",
        name: "Riekonkoski kalastusluvat 2017",
        prices: [
          {
            price: "14,19 €/24 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Alle 18 v."
          },
          {
            price: "19,78 €/24 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          }
        ],
        address: "Riekonkoski ",
        gdata: { results: [], status: "ZERO_RESULTS" }
      },
      {
        id: "6e69fb33-7eb1-44a8-9540-472562b7d209",
        name: "Tiilikkajoki kalastusluvat 2017",
        prices: [
          {
            price: "15 €/24 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          { price: "50 €/vuosi", type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki" }
        ],
        address: "Tiilikkajoki ",
        gdata: {
          results: [
            {
              address_components: [
                {
                  long_name: "Tiilikkajoki",
                  short_name: "Tiilikkajoki",
                  types: ["establishment", "natural_feature"]
                },
                {
                  long_name: "Finland",
                  short_name: "FI",
                  types: ["country", "political"]
                }
              ],
              formatted_address: "Tiilikkajoki, Finland",
              geometry: {
                bounds: {
                  northeast: { lat: 63.467315, lng: 28.1296775 },
                  southwest: { lat: 63.4200931, lng: 28.0183054 }
                },
                location: { lat: 63.443704, lng: 28.0739914 },
                location_type: "APPROXIMATE",
                viewport: {
                  northeast: { lat: 63.467315, lng: 28.1296775 },
                  southwest: { lat: 63.4200931, lng: 28.0183054 }
                }
              },
              place_id: "ChIJW3gVdu9Ag0YRiLsLZMnVM6M",
              types: ["establishment", "natural_feature"]
            }
          ],
          status: "OK"
        }
      },
      {
        id: "6bdb2ff9-bfec-4197-b2f8-a3309c9d5123",
        name: "Kota- ja Konttijoki kalastusluvat 2017",
        prices: [
          {
            price: "6,5 €/12 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Alle 18 v."
          },
          {
            price: "13,58 €/24 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          }
        ],
        address: "Kota- ja Konttijoki ",
        gdata: {
          error_message:
            "You have exceeded your daily request quota for this API. We recommend registering for a key at the Google Developers Console: https://console.developers.google.com/apis/credentials?project=_",
          results: [],
          status: "OVER_QUERY_LIMIT"
        }
      },
      {
        id: "b7457f11-1de3-4348-8fbf-221495fdd6c9",
        name: "Hammonjoki kalastuslupa 2017",
        prices: [
          {
            price: "15 €/3 vrk",
            type: "1.1. -31.8. ja 01.12. -31.12 , Alle 18 v."
          },
          {
            price: "7,5 €/vrk",
            type: "1.1. -31.8. ja 01.12. -31.12 ,  Perhokalastus Alle 18 v."
          },
          {
            price: "40 €/kausi",
            type: "1.1. -31.8. ja 01.12. -31.12 ,  Perhokalastus Alle 18 v."
          },
          {
            price: "15 €/vrk",
            type: "1.1. -31.8. ja 01.12. -31.12 ,  Perhokalastus Kaikki"
          },
          {
            price: "30 €/3 vrk",
            type: "1.1. -31.8. ja 01.12. -31.12 ,  Perhokalastus Kaikki"
          },
          {
            price: "80 €/kausi",
            type: "1.1. -31.8. ja 01.12. -31.12 ,  Perhokalastus Kaikki"
          }
        ],
        address: "Hammonjoki ",
        gdata: {
          results: [
            {
              address_components: [
                {
                  long_name: "Hammonjoki",
                  short_name: "Hammonjoki",
                  types: ["establishment", "natural_feature"]
                },
                {
                  long_name: "Hollola",
                  short_name: "Hollola",
                  types: ["administrative_area_level_3", "political"]
                },
                {
                  long_name: "Finland",
                  short_name: "FI",
                  types: ["country", "political"]
                },
                {
                  long_name: "16710",
                  short_name: "16710",
                  types: ["postal_code"]
                }
              ],
              formatted_address: "Hammonjoki, 16710 Hollola, Finland",
              geometry: {
                location: { lat: 61.0658332, lng: 25.359939 },
                location_type: "APPROXIMATE",
                viewport: {
                  northeast: { lat: 61.071231, lng: 25.3759464 },
                  southwest: { lat: 61.06043450000001, lng: 25.3439316 }
                }
              },
              place_id: "ChIJjfxaeqQxjkYRfppNGRr4-YE",
              types: ["establishment", "natural_feature"]
            }
          ],
          status: "OK"
        }
      },
      {
        id: "f6c643c2-9ea0-4645-bcca-dd0eb046ced4",
        name: "Sarvikkaankosket kalastusluvat 2017",
        prices: [
          {
            price: "50 €/viikko",
            type: "1.1. -31.8. ja 01.12. -31.12 ,  Heittokalastus Kaikki"
          },
          {
            price: "150 €/kausi",
            type: "1.1. -31.8. ja 01.12. -31.12 ,  Heittokalastus Kaikki"
          },
          {
            price: "20 €/24 tuntia",
            type: "Koko vuosi ,  Heittokalastus Kaikki"
          }
        ],
        address: "Sarvikkaankosket ",
        gdata: {
          error_message:
            "You have exceeded your daily request quota for this API. We recommend registering for a key at the Google Developers Console: https://console.developers.google.com/apis/credentials?project=_",
          results: [],
          status: "OVER_QUERY_LIMIT"
        }
      },
      {
        id: "f91935df-5ebc-4cc7-825e-ee2cf82245bf",
        name: "Kalmukoski ja Haapakoski kalastuslupa 2017",
        prices: [
          {
            price: "15 €/24 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          {
            price: "65 €/kausi",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          {
            price: "200 €/kausi",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          }
        ],
        address: "Kalmukoski ja Haapakoski ",
        gdata: {
          error_message:
            "You have exceeded your daily request quota for this API. We recommend registering for a key at the Google Developers Console: https://console.developers.google.com/apis/credentials?project=_",
          results: [],
          status: "OVER_QUERY_LIMIT"
        }
      },
      {
        id: "1759d4e5-3d26-4a81-9256-1fff19379d4c",
        name: "Karajoki kalastusluvat 2017",
        prices: [
          { price: "5 €/vrk", type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki" }
        ],
        address: "Karajoki ",
        gdata: {
          error_message:
            "You have exceeded your daily request quota for this API. We recommend registering for a key at the Google Developers Console: https://console.developers.google.com/apis/credentials?project=_",
          results: [],
          status: "OVER_QUERY_LIMIT"
        }
      },
      {
        id: "48283c65-e95d-44f5-9d0a-54bb95afae55",
        name: "Kouheroistenkoski kalastusluvat 2017",
        prices: [
          { price: "5 €/vrk", type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki" },
          { price: "25 €/vuosi", type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki" }
        ],
        address: "Kouheroistenkoski ",
        gdata: { results: [], status: "ZERO_RESULTS" }
      },
      {
        id: "9b403102-f72c-4ee0-954f-39a9665617c0",
        name: "Tuhmakoski kalastusluvat 2017",
        prices: [
          {
            price: "15 €/24 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          { price: "65 €/kausi", type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki" }
        ],
        address: "Tuhmakoski ",
        gdata: { results: [], status: "ZERO_RESULTS" }
      },
      {
        id: "18ed27e8-84ea-4e26-ae4c-57e3501048a3",
        name: "Ahvenkoski kalastuslupa 2017",
        prices: [
          {
            price: "10 €/24 tuntia",
            type: "Kesäkausi ,  Heittokalastus Alle 15 v."
          },
          { price: "10 €/3 tuntia", type: "Kesäkausi ,  Heittokalastus Muut" },
          { price: "15 €/24 tuntia", type: "Kesäkausi ,  Heittokalastus Muut" },
          { price: "50 €/viikko", type: "Kesäkausi ,  Heittokalastus Muut" },
          { price: "200 €/kausi", type: "Kesäkausi ,  Heittokalastus Muut" }
        ],
        address: "Ahvenkoski ",
        gdata: {
          error_message:
            "You have exceeded your daily request quota for this API. We recommend registering for a key at the Google Developers Console: https://console.developers.google.com/apis/credentials?project=_",
          results: [],
          status: "OVER_QUERY_LIMIT"
        }
      },
      {
        id: "7bded799-74e3-4d0e-9864-cca768cb4c75",
        name: "Kiiminkijoki kalastusluvat 2017",
        prices: [
          { price: "10 €/vrk", type: "Koko vuosi , Kaikki" },
          { price: "20 €/viikko", type: "Koko vuosi , Kaikki" },
          { price: "45 €/kausi", type: "Koko vuosi , Kaikki" },
          { price: "20 €/24 tuntia", type: "Koko vuosi , Perhe" },
          { price: "40 €/viikko", type: "Koko vuosi , Perhe" },
          { price: "90 €/vuosi", type: "Koko vuosi , Perhe" }
        ],
        address: "Kiiminkijoki ",
        gdata: {
          error_message:
            "You have exceeded your daily request quota for this API. We recommend registering for a key at the Google Developers Console: https://console.developers.google.com/apis/credentials?project=_",
          results: [],
          status: "OVER_QUERY_LIMIT"
        }
      },
      {
        id: "fc6c9755-ca8d-4bba-840f-1b35b48b50df",
        name: "Mehtiönkoski kalastusluvat 2017",
        prices: [
          {
            price: "10 €/24 tuntia",
            type: "Kesäkausi ,  Heittokalastus Alle 15 v."
          },
          { price: "10 €/3 tuntia", type: "Kesäkausi ,  Heittokalastus Muut" },
          { price: "15 €/24 tuntia", type: "Kesäkausi ,  Heittokalastus Muut" },
          { price: "50 €/viikko", type: "Kesäkausi ,  Heittokalastus Muut" },
          { price: "200 €/vuosi", type: "Kesäkausi ,  Heittokalastus Muut" }
        ],
        address: "Mehtiönkoski ",
        gdata: {
          error_message:
            "Invalid request. One of the input parameters contains a non-UTF-8 string.",
          results: [],
          status: "INVALID_REQUEST"
        }
      },
      {
        id: "16e1edba-3f04-40be-84b8-99750295c6c5",
        name: "Jämsänjoki kalastuslupa 2017",
        prices: [
          { price: "10 €/viikko", type: "Koko vuosi , Kaikki" },
          { price: "20 €/vuosi", type: "Koko vuosi , Kaikki" }
        ],
        address: "Jämsänjoki ",
        gdata: {
          error_message:
            "Invalid request. One of the input parameters contains a non-UTF-8 string.",
          results: [],
          status: "INVALID_REQUEST"
        }
      },
      {
        id: "1c58708a-e7f2-4f30-b564-e6fe08b77748",
        name: "Survosenkoski kalastuslupa 2017",
        prices: [
          {
            price: "15 €/12 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          {
            price: "20 €/24 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          {
            price: "30 €/viikko",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          {
            price: "100 €/kausi",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          }
        ],
        address: "Survosenkoski ",
        gdata: {
          results: [
            {
              address_components: [
                {
                  long_name: "425",
                  short_name: "425",
                  types: ["street_number"]
                },
                {
                  long_name: "Keuruuntie",
                  short_name: "Keuruuntie",
                  types: ["route"]
                },
                {
                  long_name: "Jämsä",
                  short_name: "Jämsä",
                  types: ["administrative_area_level_3", "political"]
                },
                {
                  long_name: "Finland",
                  short_name: "FI",
                  types: ["country", "political"]
                },
                {
                  long_name: "42440",
                  short_name: "42440",
                  types: ["postal_code"]
                }
              ],
              formatted_address: "Keuruuntie 425, 42440 Jämsä, Finland",
              geometry: {
                location: { lat: 62.1065487, lng: 25.084152 },
                location_type: "ROOFTOP",
                viewport: {
                  northeast: {
                    lat: 62.10789768029151,
                    lng: 25.0855009802915
                  },
                  southwest: { lat: 62.1051997197085, lng: 25.0828030197085 }
                }
              },
              place_id: "ChIJL0QxBUuGhUYR7TQEygpZXDw",
              types: ["establishment", "point_of_interest"]
            }
          ],
          status: "OK"
        }
      },
      {
        id: "5c58dcd8-56c0-4ce0-8c4f-5d31d2393c8c",
        name: "Vaajavirta kalastusluvat 2017",
        prices: [
          {
            price: "15 €/12 tuntia",
            type: "1.1-31.8. ja 01.12.-31.12., Kaikki"
          },
          { price: "20 €/vrk", type: "1.1-31.8. ja 01.12.-31.12., Kaikki" },
          { price: "28 €/2 vrk", type: "1.1-31.8. ja 01.12.-31.12., Kaikki" },
          { price: "60 €/viikko", type: "1.1-31.8. ja 01.12.-31.12., Kaikki" }
        ],
        address: "Vaajavirta ",
        gdata: {
          error_message:
            "You have exceeded your daily request quota for this API. We recommend registering for a key at the Google Developers Console: https://console.developers.google.com/apis/credentials?project=_",
          results: [],
          status: "OVER_QUERY_LIMIT"
        }
      },
      {
        id: "99d6fb33-cb0c-426e-bf01-f87057328351",
        name: "Äänekosken Kalakeidas kalastusluvat 2017",
        prices: [
          {
            price: "10 €/24 tuntia",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          { price: "40 €/kausi", type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki" }
        ],
        address: "Äänekosken Kalakeidas ",
        gdata: {
          error_message:
            "Invalid request. One of the input parameters contains a non-UTF-8 string.",
          results: [],
          status: "INVALID_REQUEST"
        }
      },
      {
        id: "7ef9ccc7-3eb2-4787-842c-764b07bb1079",
        name: "Konnuskoski kalastusluvat 2016",
        prices: [
          {
            price: "10 €/4 tuntia",
            type: "1.1. - 31.8. ja 1.12. - 31.12, Kaikki"
          },
          { price: "15 €/vrk", type: "1.1. - 31.8. ja 1.12. - 31.12, Kaikki" },
          {
            price: "50 €/viikko",
            type: "1.1. - 31.8. ja 1.12. - 31.12, Kaikki"
          },
          {
            price: "150 €/kausi",
            type: "1.1. - 31.8. ja 1.12. - 31.12, Kaikki"
          }
        ],
        address: "Konnuskoski ",
        gdata: {
          results: [
            {
              address_components: [
                {
                  long_name: "Leppävirta",
                  short_name: "Leppävirta",
                  types: ["locality", "political"]
                },
                {
                  long_name: "Finland",
                  short_name: "FI",
                  types: ["country", "political"]
                },
                {
                  long_name: "79100",
                  short_name: "79100",
                  types: ["postal_code"]
                }
              ],
              formatted_address: "79100 Leppävirta, Finland",
              geometry: {
                location: { lat: 62.5495934, lng: 27.7710671 },
                location_type: "GEOMETRIC_CENTER",
                viewport: {
                  northeast: { lat: 62.5509423802915, lng: 27.7724160802915 },
                  southwest: { lat: 62.5482444197085, lng: 27.7697181197085 }
                }
              },
              partial_match: true,
              place_id: "ChIJ6-ze80Mym0YR9ojDNpQzCbc",
              types: ["establishment", "point_of_interest"]
            }
          ],
          status: "OK"
        }
      },
      {
        id: "76a5ad1f-dee0-46f1-95f9-8145c4fee12e",
        name: "Viherinkoski kalastusluvat 2016",
        prices: [
          {
            price: "45 €/kuukausi",
            type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki"
          },
          { price: "60 €/kausi", type: "1.1. -31.8. ja 01.12. -31.12 , Kaikki" }
        ],
        address: "Viherinkoski ",
        gdata: {
          error_message:
            "You have exceeded your daily request quota for this API. We recommend registering for a key at the Google Developers Console: https://console.developers.google.com/apis/credentials?project=_",
          results: [],
          status: "OVER_QUERY_LIMIT"
        }
      },
      {
        id: "73999d7e-85fa-4f07-aeee-f439e5f133d6",
        name: "Pisankoski kalastusluvat 2016",
        prices: [
          { price: "15 €/3 tuntia", type: "Koko vuosi , Kaikki" },
          { price: "19 €/24 tuntia", type: "Koko vuosi , Kaikki" }
        ],
        address: "Pisankoski ",
        gdata: {
          results: [
            {
              address_components: [
                {
                  long_name: "Pisankoski",
                  short_name: "Pisankoski",
                  types: ["locality", "political"]
                },
                {
                  long_name: "Finland",
                  short_name: "FI",
                  types: ["country", "political"]
                },
                {
                  long_name: "73770",
                  short_name: "73770",
                  types: ["postal_code"]
                }
              ],
              formatted_address: "73770 Pisankoski, Finland",
              geometry: {
                location: { lat: 63.18647389999999, lng: 28.4152352 },
                location_type: "APPROXIMATE",
                viewport: {
                  northeast: { lat: 63.1915067, lng: 28.4312426 },
                  southwest: { lat: 63.1814402, lng: 28.3992278 }
                }
              },
              place_id: "ChIJKR3Y37xSg0YRIZIeJtdGASY",
              types: ["locality", "political"]
            }
          ],
          status: "OK"
        }
      },
      {
        id: "5a10d1d5-bd91-4483-b297-c60314b30f8e",
        name: "Sarvikkaankosket kalastusluvat 2016",
        prices: [
          {
            price: "50 €/viikko",
            type: "1.1. -31.8. ja 01.12. -31.12 ,  Heittokalastus Kaikki"
          },
          {
            price: "150 €/kausi",
            type: "1.1. -31.8. ja 01.12. -31.12 ,  Heittokalastus Kaikki"
          },
          {
            price: "20 €/24 tuntia",
            type: "Koko vuosi ,  Heittokalastus Kaikki"
          }
        ],
        address: "Sarvikkaankosket ",
        gdata: {
          error_message:
            "You have exceeded your daily request quota for this API. We recommend registering for a key at the Google Developers Console: https://console.developers.google.com/apis/credentials?project=_",
          results: [],
          status: "OVER_QUERY_LIMIT"
        }
      }
    ])
  };
};
