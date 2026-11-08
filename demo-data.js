window.DEMO_DATA = {
  "meta": {
    "asOf": "2026-11-05",
    "rentalRows": 9174,
    "rentalEligible": 8761,
    "rentalGeoRows": 3048,
    "poiNodes": 2696,
    "stationCount": 27,
    "schoolCount": 8,
    "scoreRows": 148,
    "source": "28Hse · MTR Open Data · OpenStreetMap",
    "modes": {
      "balanced": {
        "commute": 0.45,
        "rent": 0.4,
        "dining": 0.15
      },
      "budget": {
        "commute": 0.25,
        "rent": 0.6,
        "dining": 0.15
      },
      "commute": {
        "commute": 0.65,
        "rent": 0.25,
        "dining": 0.1
      },
      "food": {
        "commute": 0.3,
        "rent": 0.3,
        "dining": 0.4
      }
    }
  },
  "schools": [
    {
      "id": "hku",
      "name": "香港大学",
      "short": "HKU",
      "stations": [
        {
          "name": "香港大学",
          "nameZh": "香港大學",
          "nameEn": "HKU",
          "code": "HKU",
          "lines": "ISL",
          "lat": 22.284,
          "lng": 114.1356,
          "rent": {
            "medianRent": 20800,
            "medianPsf": 64.0,
            "medianSize": 329,
            "affordableShare": 0.182,
            "nAnalysis": 329,
            "quantiles": [
              12400,
              16800,
              20800,
              26000,
              35000
            ]
          },
          "commute": {
            "mtrMinutes": 0,
            "transferWalk": 0,
            "totalMinutes": 0,
            "transfers": 0,
            "connector": false,
            "connectorNote": "香港大学站作为校园港铁站代理点",
            "fare": 0.0,
            "firstTrain": "",
            "lastTrain": "",
            "route": "HKU"
          },
          "poi": {
            "total": 225,
            "restaurantDensity": 42.3,
            "fastFoodDensity": 6.7,
            "supermarketDensity": 10.5,
            "convenienceDensity": 9.9,
            "cheapShare": 0.136,
            "lowSample": false,
            "diningRaw": 65.8
          },
          "componentScores": {
            "rent": 30.0,
            "commute": 85.0,
            "dining": 25.0
          },
          "scores": {
            "balanced": {
              "overall": 54.0,
              "rent": 30.0,
              "commute": 85.0,
              "dining": 25.0
            },
            "budget": {
              "overall": 43.0,
              "rent": 30.0,
              "commute": 85.0,
              "dining": 25.0
            },
            "commute": {
              "overall": 65.2,
              "rent": 30.0,
              "commute": 85.0,
              "dining": 25.0
            },
            "food": {
              "overall": 44.5,
              "rent": 30.0,
              "commute": 85.0,
              "dining": 25.0
            }
          }
        },
        {
          "name": "西营盘",
          "nameZh": "西營盤",
          "nameEn": "Sai Ying Pun",
          "code": "SYP",
          "lines": "ISL",
          "lat": 22.28547,
          "lng": 114.14242,
          "rent": {
            "medianRent": 20800,
            "medianPsf": 64.0,
            "medianSize": 329,
            "affordableShare": 0.182,
            "nAnalysis": 329,
            "quantiles": [
              12400,
              16800,
              20800,
              26000,
              35000
            ]
          },
          "commute": {
            "mtrMinutes": 2,
            "transferWalk": 0,
            "totalMinutes": 2,
            "transfers": 0,
            "connector": false,
            "connectorNote": "香港大学站作为校园港铁站代理点",
            "fare": 4.9,
            "firstTrain": "06:11",
            "lastTrain": "01:08",
            "route": "SYP > HKU"
          },
          "poi": {
            "total": 250,
            "restaurantDensity": 49.3,
            "fastFoodDensity": 6.7,
            "supermarketDensity": 11.8,
            "convenienceDensity": 9.9,
            "cheapShare": 0.119,
            "lowSample": false,
            "diningRaw": 68.4
          },
          "componentScores": {
            "rent": 30.0,
            "commute": 58.8,
            "dining": 50.0
          },
          "scores": {
            "balanced": {
              "overall": 45.9,
              "rent": 30.0,
              "commute": 58.8,
              "dining": 50.0
            },
            "budget": {
              "overall": 40.2,
              "rent": 30.0,
              "commute": 58.8,
              "dining": 50.0
            },
            "commute": {
              "overall": 50.7,
              "rent": 30.0,
              "commute": 58.8,
              "dining": 50.0
            },
            "food": {
              "overall": 46.6,
              "rent": 30.0,
              "commute": 58.8,
              "dining": 50.0
            }
          }
        },
        {
          "name": "坚尼地城",
          "nameZh": "堅尼地城",
          "nameEn": "Kennedy Town",
          "code": "KET",
          "lines": "ISL",
          "lat": 22.28199,
          "lng": 114.12871,
          "rent": {
            "medianRent": 22550,
            "medianPsf": 59.6,
            "medianSize": 366,
            "affordableShare": 0.173,
            "nAnalysis": 266,
            "quantiles": [
              13250,
              16800,
              22550,
              30000,
              39650
            ]
          },
          "commute": {
            "mtrMinutes": 2,
            "transferWalk": 0,
            "totalMinutes": 2,
            "transfers": 0,
            "connector": false,
            "connectorNote": "香港大学站作为校园港铁站代理点",
            "fare": 4.9,
            "firstTrain": "06:00",
            "lastTrain": "00:50",
            "route": "KET > HKU"
          },
          "poi": {
            "total": 145,
            "restaurantDensity": 28.6,
            "fastFoodDensity": 4.1,
            "supermarketDensity": 6.0,
            "convenienceDensity": 6.4,
            "cheapShare": 0.126,
            "lowSample": false,
            "diningRaw": 52.6
          },
          "componentScores": {
            "rent": 15.0,
            "commute": 58.8,
            "dining": 0.0
          },
          "scores": {
            "balanced": {
              "overall": 32.4,
              "rent": 15.0,
              "commute": 58.8,
              "dining": 0.0
            },
            "budget": {
              "overall": 23.7,
              "rent": 15.0,
              "commute": 58.8,
              "dining": 0.0
            },
            "commute": {
              "overall": 41.9,
              "rent": 15.0,
              "commute": 58.8,
              "dining": 0.0
            },
            "food": {
              "overall": 22.1,
              "rent": 15.0,
              "commute": 58.8,
              "dining": 0.0
            }
          }
        },
        {
          "name": "上环",
          "nameZh": "上環",
          "nameEn": "Sheung Wan",
          "code": "SHW",
          "lines": "ISL",
          "lat": 22.28638,
          "lng": 114.15162,
          "rent": {
            "medianRent": 19800,
            "medianPsf": 57.2,
            "medianSize": 365,
            "affordableShare": 0.216,
            "nAnalysis": 264,
            "quantiles": [
              11410,
              16000,
              19800,
              26125,
              34640
            ]
          },
          "commute": {
            "mtrMinutes": 4,
            "transferWalk": 0,
            "totalMinutes": 4,
            "transfers": 0,
            "connector": false,
            "connectorNote": "香港大学站作为校园港铁站代理点",
            "fare": 4.9,
            "firstTrain": "06:09",
            "lastTrain": "01:06",
            "route": "SHW > SYP > HKU"
          },
          "poi": {
            "total": 380,
            "restaurantDensity": 89.1,
            "fastFoodDensity": 8.9,
            "supermarketDensity": 9.2,
            "convenienceDensity": 12.7,
            "cheapShare": 0.091,
            "lowSample": false,
            "diningRaw": 75.3
          },
          "componentScores": {
            "rent": 87.5,
            "commute": 32.5,
            "dining": 100.0
          },
          "scores": {
            "balanced": {
              "overall": 64.6,
              "rent": 87.5,
              "commute": 32.5,
              "dining": 100.0
            },
            "budget": {
              "overall": 75.6,
              "rent": 87.5,
              "commute": 32.5,
              "dining": 100.0
            },
            "commute": {
              "overall": 53.0,
              "rent": 87.5,
              "commute": 32.5,
              "dining": 100.0
            },
            "food": {
              "overall": 76.0,
              "rent": 87.5,
              "commute": 32.5,
              "dining": 100.0
            }
          }
        },
        {
          "name": "中环",
          "nameZh": "中環",
          "nameEn": "Central",
          "code": "CEN",
          "lines": "ISL / TWL",
          "lat": 22.28194,
          "lng": 114.15818,
          "rent": {
            "medianRent": 19800,
            "medianPsf": 57.2,
            "medianSize": 365,
            "affordableShare": 0.216,
            "nAnalysis": 264,
            "quantiles": [
              11410,
              16000,
              19800,
              26125,
              34640
            ]
          },
          "commute": {
            "mtrMinutes": 6,
            "transferWalk": 0,
            "totalMinutes": 6,
            "transfers": 0,
            "connector": false,
            "connectorNote": "香港大学站作为校园港铁站代理点",
            "fare": 5.9,
            "firstTrain": "06:07",
            "lastTrain": "01:04",
            "route": "CEN > SHW > SYP > HKU"
          },
          "poi": {
            "total": 380,
            "restaurantDensity": 88.8,
            "fastFoodDensity": 11.1,
            "supermarketDensity": 8.3,
            "convenienceDensity": 10.8,
            "cheapShare": 0.112,
            "lowSample": false,
            "diningRaw": 73.9
          },
          "componentScores": {
            "rent": 87.5,
            "commute": 15.0,
            "dining": 75.0
          },
          "scores": {
            "balanced": {
              "overall": 53.0,
              "rent": 87.5,
              "commute": 15.0,
              "dining": 75.0
            },
            "budget": {
              "overall": 67.5,
              "rent": 87.5,
              "commute": 15.0,
              "dining": 75.0
            },
            "commute": {
              "overall": 39.1,
              "rent": 87.5,
              "commute": 15.0,
              "dining": 75.0
            },
            "food": {
              "overall": 60.8,
              "rent": 87.5,
              "commute": 15.0,
              "dining": 75.0
            }
          }
        }
      ]
    },
    {
      "id": "cuhk",
      "name": "香港中文大学",
      "short": "CUHK",
      "stations": [
        {
          "name": "大学",
          "nameZh": "大學",
          "nameEn": "University",
          "code": "UNI",
          "lines": "EAL",
          "lat": 22.4155,
          "lng": 114.2072,
          "rent": {
            "medianRent": 21400,
            "medianPsf": 47.1,
            "medianSize": 472,
            "affordableShare": 0.239,
            "nAnalysis": 715,
            "quantiles": [
              12880,
              15500,
              21400,
              32000,
              42000
            ]
          },
          "commute": {
            "mtrMinutes": 0,
            "transferWalk": 0,
            "totalMinutes": 0,
            "transfers": 0,
            "connector": false,
            "connectorNote": "大学站作为校园港铁站代理点",
            "fare": 0.0,
            "firstTrain": "",
            "lastTrain": "",
            "route": "UNI"
          },
          "poi": {
            "total": 25,
            "restaurantDensity": 5.4,
            "fastFoodDensity": 1.9,
            "supermarketDensity": 0.3,
            "convenienceDensity": 0.3,
            "cheapShare": 0.261,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 62.5,
            "commute": 85.0,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 74.4,
              "rent": 62.5,
              "commute": 85.0,
              "dining": null
            },
            "budget": {
              "overall": 69.1,
              "rent": 62.5,
              "commute": 85.0,
              "dining": null
            },
            "commute": {
              "overall": 78.8,
              "rent": 62.5,
              "commute": 85.0,
              "dining": null
            },
            "food": {
              "overall": 73.8,
              "rent": 62.5,
              "commute": 85.0,
              "dining": null
            }
          }
        },
        {
          "name": "大围",
          "nameZh": "大圍",
          "nameEn": "Tai Wai",
          "code": "TAW",
          "lines": "EAL / TML",
          "lat": 22.3728,
          "lng": 114.1789,
          "rent": {
            "medianRent": 21400,
            "medianPsf": 47.1,
            "medianSize": 472,
            "affordableShare": 0.239,
            "nAnalysis": 715,
            "quantiles": [
              12880,
              15500,
              21400,
              32000,
              42000
            ]
          },
          "commute": {
            "mtrMinutes": 10,
            "transferWalk": 0,
            "totalMinutes": 10,
            "transfers": 0,
            "connector": false,
            "connectorNote": "大学站作为校园港铁站代理点",
            "fare": 4.6,
            "firstTrain": "05:35",
            "lastTrain": "00:41",
            "route": "TAW > SHT > FOT > UNI"
          },
          "poi": {
            "total": 47,
            "restaurantDensity": 6.4,
            "fastFoodDensity": 3.5,
            "supermarketDensity": 1.9,
            "convenienceDensity": 2.5,
            "cheapShare": 0.355,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 62.5,
            "commute": 32.5,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 46.6,
              "rent": 62.5,
              "commute": 32.5,
              "dining": null
            },
            "budget": {
              "overall": 53.7,
              "rent": 62.5,
              "commute": 32.5,
              "dining": null
            },
            "commute": {
              "overall": 40.8,
              "rent": 62.5,
              "commute": 32.5,
              "dining": null
            },
            "food": {
              "overall": 47.5,
              "rent": 62.5,
              "commute": 32.5,
              "dining": null
            }
          }
        },
        {
          "name": "沙田",
          "nameZh": "沙田",
          "nameEn": "Sha Tin",
          "code": "SHT",
          "lines": "EAL",
          "lat": 22.38255,
          "lng": 114.1876,
          "rent": {
            "medianRent": 21400,
            "medianPsf": 47.1,
            "medianSize": 472,
            "affordableShare": 0.239,
            "nAnalysis": 715,
            "quantiles": [
              12880,
              15500,
              21400,
              32000,
              42000
            ]
          },
          "commute": {
            "mtrMinutes": 7,
            "transferWalk": 0,
            "totalMinutes": 7,
            "transfers": 0,
            "connector": false,
            "connectorNote": "大学站作为校园港铁站代理点",
            "fare": 4.6,
            "firstTrain": "05:35",
            "lastTrain": "00:44",
            "route": "SHT > FOT > UNI"
          },
          "poi": {
            "total": 44,
            "restaurantDensity": 5.4,
            "fastFoodDensity": 3.2,
            "supermarketDensity": 2.2,
            "convenienceDensity": 2.2,
            "cheapShare": 0.37,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 62.5,
            "commute": 50.0,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 55.9,
              "rent": 62.5,
              "commute": 50.0,
              "dining": null
            },
            "budget": {
              "overall": 58.8,
              "rent": 62.5,
              "commute": 50.0,
              "dining": null
            },
            "commute": {
              "overall": 53.5,
              "rent": 62.5,
              "commute": 50.0,
              "dining": null
            },
            "food": {
              "overall": 56.2,
              "rent": 62.5,
              "commute": 50.0,
              "dining": null
            }
          }
        },
        {
          "name": "火炭",
          "nameZh": "火炭",
          "nameEn": "Fo Tan",
          "code": "FOT",
          "lines": "EAL",
          "lat": 22.3948,
          "lng": 114.198,
          "rent": {
            "medianRent": 21400,
            "medianPsf": 47.1,
            "medianSize": 472,
            "affordableShare": 0.239,
            "nAnalysis": 715,
            "quantiles": [
              12880,
              15500,
              21400,
              32000,
              42000
            ]
          },
          "commute": {
            "mtrMinutes": 5,
            "transferWalk": 0,
            "totalMinutes": 5,
            "transfers": 0,
            "connector": false,
            "connectorNote": "大学站作为校园港铁站代理点",
            "fare": 4.0,
            "firstTrain": "05:37",
            "lastTrain": "00:47",
            "route": "FOT > UNI"
          },
          "poi": {
            "total": 39,
            "restaurantDensity": 5.1,
            "fastFoodDensity": 3.5,
            "supermarketDensity": 1.6,
            "convenienceDensity": 1.9,
            "cheapShare": 0.407,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 62.5,
            "commute": 67.5,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 65.1,
              "rent": 62.5,
              "commute": 67.5,
              "dining": null
            },
            "budget": {
              "overall": 64.0,
              "rent": 62.5,
              "commute": 67.5,
              "dining": null
            },
            "commute": {
              "overall": 66.1,
              "rent": 62.5,
              "commute": 67.5,
              "dining": null
            },
            "food": {
              "overall": 65.0,
              "rent": 62.5,
              "commute": 67.5,
              "dining": null
            }
          }
        },
        {
          "name": "九龙塘",
          "nameZh": "九龍塘",
          "nameEn": "Kowloon Tong",
          "code": "KOT",
          "lines": "EAL / KTL",
          "lat": 22.33687,
          "lng": 114.17622,
          "rent": {
            "medianRent": 46000,
            "medianPsf": 48.8,
            "medianSize": 1027,
            "affordableShare": 0.036,
            "nAnalysis": 110,
            "quantiles": [
              28900,
              36125,
              46000,
              70000,
              78000
            ]
          },
          "commute": {
            "mtrMinutes": 14,
            "transferWalk": 0,
            "totalMinutes": 14,
            "transfers": 0,
            "connector": false,
            "connectorNote": "大学站作为校园港铁站代理点",
            "fare": 8.0,
            "firstTrain": "05:30",
            "lastTrain": "00:37",
            "route": "KOT > TAW > SHT > FOT > UNI"
          },
          "poi": {
            "total": 35,
            "restaurantDensity": 5.7,
            "fastFoodDensity": 1.9,
            "supermarketDensity": 1.6,
            "convenienceDensity": 1.6,
            "cheapShare": 0.25,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 0.0,
            "commute": 15.0,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 7.9,
              "rent": 0.0,
              "commute": 15.0,
              "dining": null
            },
            "budget": {
              "overall": 4.4,
              "rent": 0.0,
              "commute": 15.0,
              "dining": null
            },
            "commute": {
              "overall": 10.8,
              "rent": 0.0,
              "commute": 15.0,
              "dining": null
            },
            "food": {
              "overall": 7.5,
              "rent": 0.0,
              "commute": 15.0,
              "dining": null
            }
          }
        }
      ]
    },
    {
      "id": "hkust",
      "name": "香港科技大学",
      "short": "HKUST",
      "stations": [
        {
          "name": "坑口",
          "nameZh": "坑口",
          "nameEn": "Hang Hau",
          "code": "HAH",
          "lines": "TKL",
          "lat": 22.31885,
          "lng": 114.269,
          "rent": {
            "medianRent": 22500,
            "medianPsf": 43.0,
            "medianSize": 541,
            "affordableShare": 0.037,
            "nAnalysis": 924,
            "quantiles": [
              16590,
              19000,
              22500,
              28000,
              36940
            ]
          },
          "commute": {
            "mtrMinutes": 0,
            "transferWalk": 0,
            "totalMinutes": 0,
            "transfers": 0,
            "connector": true,
            "connectorNote": "坑口站后仍需巴士/小巴或其他道路接驳至校园；本表时间仅为港铁段",
            "fare": 0.0,
            "firstTrain": "",
            "lastTrain": "",
            "route": "HAH"
          },
          "poi": {
            "total": 13,
            "restaurantDensity": 1.6,
            "fastFoodDensity": 1.3,
            "supermarketDensity": 0.3,
            "convenienceDensity": 1.0,
            "cheapShare": 0.444,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 50.0,
            "commute": 85.0,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 68.5,
              "rent": 50.0,
              "commute": 85.0,
              "dining": null
            },
            "budget": {
              "overall": 60.3,
              "rent": 50.0,
              "commute": 85.0,
              "dining": null
            },
            "commute": {
              "overall": 75.3,
              "rent": 50.0,
              "commute": 85.0,
              "dining": null
            },
            "food": {
              "overall": 67.5,
              "rent": 50.0,
              "commute": 85.0,
              "dining": null
            }
          }
        },
        {
          "name": "宝琳",
          "nameZh": "寶琳",
          "nameEn": "Po Lam",
          "code": "POA",
          "lines": "TKL",
          "lat": 22.322,
          "lng": 114.258,
          "rent": {
            "medianRent": 22500,
            "medianPsf": 43.0,
            "medianSize": 541,
            "affordableShare": 0.037,
            "nAnalysis": 924,
            "quantiles": [
              16590,
              19000,
              22500,
              28000,
              36940
            ]
          },
          "commute": {
            "mtrMinutes": 4,
            "transferWalk": 0,
            "totalMinutes": 4,
            "transfers": 0,
            "connector": true,
            "connectorNote": "坑口站后仍需巴士/小巴或其他道路接驳至校园；本表时间仅为港铁段",
            "fare": 4.9,
            "firstTrain": "06:00",
            "lastTrain": "00:50",
            "route": "POA > HAH"
          },
          "poi": {
            "total": 7,
            "restaurantDensity": 1.0,
            "fastFoodDensity": 0.3,
            "supermarketDensity": 0.6,
            "convenienceDensity": 0.3,
            "cheapShare": 0.25,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 50.0,
            "commute": 32.5,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 40.7,
              "rent": 50.0,
              "commute": 32.5,
              "dining": null
            },
            "budget": {
              "overall": 44.9,
              "rent": 50.0,
              "commute": 32.5,
              "dining": null
            },
            "commute": {
              "overall": 37.4,
              "rent": 50.0,
              "commute": 32.5,
              "dining": null
            },
            "food": {
              "overall": 41.2,
              "rent": 50.0,
              "commute": 32.5,
              "dining": null
            }
          }
        },
        {
          "name": "将军澳",
          "nameZh": "將軍澳",
          "nameEn": "Tseung Kwan O",
          "code": "TKO",
          "lines": "TKL",
          "lat": 22.3072,
          "lng": 114.2601,
          "rent": {
            "medianRent": 22500,
            "medianPsf": 43.0,
            "medianSize": 541,
            "affordableShare": 0.037,
            "nAnalysis": 924,
            "quantiles": [
              16590,
              19000,
              22500,
              28000,
              36940
            ]
          },
          "commute": {
            "mtrMinutes": 4,
            "transferWalk": 0,
            "totalMinutes": 4,
            "transfers": 0,
            "connector": true,
            "connectorNote": "坑口站后仍需巴士/小巴或其他道路接驳至校园；本表时间仅为港铁段",
            "fare": 4.9,
            "firstTrain": "06:17",
            "lastTrain": "01:23",
            "route": "TKO > HAH"
          },
          "poi": {
            "total": 15,
            "restaurantDensity": 3.2,
            "fastFoodDensity": 1.0,
            "supermarketDensity": 0.0,
            "convenienceDensity": 0.6,
            "cheapShare": 0.231,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 50.0,
            "commute": 32.5,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 40.7,
              "rent": 50.0,
              "commute": 32.5,
              "dining": null
            },
            "budget": {
              "overall": 44.9,
              "rent": 50.0,
              "commute": 32.5,
              "dining": null
            },
            "commute": {
              "overall": 37.4,
              "rent": 50.0,
              "commute": 32.5,
              "dining": null
            },
            "food": {
              "overall": 41.2,
              "rent": 50.0,
              "commute": 32.5,
              "dining": null
            }
          }
        }
      ]
    },
    {
      "id": "cityu",
      "name": "香港城市大学",
      "short": "CityU",
      "stations": [
        {
          "name": "九龙塘",
          "nameZh": "九龍塘",
          "nameEn": "Kowloon Tong",
          "code": "KOT",
          "lines": "EAL / KTL",
          "lat": 22.33687,
          "lng": 114.17622,
          "rent": {
            "medianRent": 46000,
            "medianPsf": 48.8,
            "medianSize": 1027,
            "affordableShare": 0.036,
            "nAnalysis": 110,
            "quantiles": [
              28900,
              36125,
              46000,
              70000,
              78000
            ]
          },
          "commute": {
            "mtrMinutes": 0,
            "transferWalk": 0,
            "totalMinutes": 0,
            "transfers": 0,
            "connector": false,
            "connectorNote": "九龙塘站后步行至校园；本表时间仅为港铁段",
            "fare": 0.0,
            "firstTrain": "",
            "lastTrain": "",
            "route": "KOT"
          },
          "poi": {
            "total": 35,
            "restaurantDensity": 5.7,
            "fastFoodDensity": 1.9,
            "supermarketDensity": 1.6,
            "convenienceDensity": 1.6,
            "cheapShare": 0.25,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 6.0,
            "commute": 87.0,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 48.9,
              "rent": 6.0,
              "commute": 87.0,
              "dining": null
            },
            "budget": {
              "overall": 29.8,
              "rent": 6.0,
              "commute": 87.0,
              "dining": null
            },
            "commute": {
              "overall": 64.5,
              "rent": 6.0,
              "commute": 87.0,
              "dining": null
            },
            "food": {
              "overall": 46.5,
              "rent": 6.0,
              "commute": 87.0,
              "dining": null
            }
          }
        },
        {
          "name": "石硖尾",
          "nameZh": "石硤尾",
          "nameEn": "Shek Kip Mei",
          "code": "SKM",
          "lines": "KTL",
          "lat": 22.33182,
          "lng": 114.16842,
          "rent": {
            "medianRent": 13000,
            "medianPsf": 44.9,
            "medianSize": 302,
            "affordableShare": 0.691,
            "nAnalysis": 609,
            "quantiles": [
              5500,
              8500,
              13000,
              19800,
              30000
            ]
          },
          "commute": {
            "mtrMinutes": 3,
            "transferWalk": 0,
            "totalMinutes": 3,
            "transfers": 0,
            "connector": false,
            "connectorNote": "九龙塘站后步行至校园；本表时间仅为港铁段",
            "fare": 4.9,
            "firstTrain": "06:19",
            "lastTrain": "01:09",
            "route": "SKM > KOT"
          },
          "poi": {
            "total": 285,
            "restaurantDensity": 49.7,
            "fastFoodDensity": 11.8,
            "supermarketDensity": 9.2,
            "convenienceDensity": 16.6,
            "cheapShare": 0.192,
            "lowSample": false,
            "diningRaw": 78.2
          },
          "componentScores": {
            "rent": 73.0,
            "commute": 73.0,
            "dining": 33.3
          },
          "scores": {
            "balanced": {
              "overall": 67.0,
              "rent": 73.0,
              "commute": 73.0,
              "dining": 33.3
            },
            "budget": {
              "overall": 67.0,
              "rent": 73.0,
              "commute": 73.0,
              "dining": 33.3
            },
            "commute": {
              "overall": 69.0,
              "rent": 73.0,
              "commute": 73.0,
              "dining": 33.3
            },
            "food": {
              "overall": 57.1,
              "rent": 73.0,
              "commute": 73.0,
              "dining": 33.3
            }
          }
        },
        {
          "name": "太子",
          "nameZh": "太子",
          "nameEn": "Prince Edward",
          "code": "PRE",
          "lines": "KTL / TWL",
          "lat": 22.32445,
          "lng": 114.16846,
          "rent": {
            "medianRent": 13000,
            "medianPsf": 44.9,
            "medianSize": 314,
            "affordableShare": 0.613,
            "nAnalysis": 274,
            "quantiles": [
              6630,
              8500,
              13000,
              16575,
              21560
            ]
          },
          "commute": {
            "mtrMinutes": 5,
            "transferWalk": 0,
            "totalMinutes": 5,
            "transfers": 0,
            "connector": false,
            "connectorNote": "九龙塘站后步行至校园；本表时间仅为港铁段",
            "fare": 4.9,
            "firstTrain": "06:18",
            "lastTrain": "01:07",
            "route": "PRE > SKM > KOT"
          },
          "poi": {
            "total": 450,
            "restaurantDensity": 82.8,
            "fastFoodDensity": 15.6,
            "supermarketDensity": 13.1,
            "convenienceDensity": 25.1,
            "cheapShare": 0.159,
            "lowSample": false,
            "diningRaw": 86.1
          },
          "componentScores": {
            "rent": 68.5,
            "commute": 59.0,
            "dining": 66.7
          },
          "scores": {
            "balanced": {
              "overall": 64.0,
              "rent": 68.5,
              "commute": 59.0,
              "dining": 66.7
            },
            "budget": {
              "overall": 65.9,
              "rent": 68.5,
              "commute": 59.0,
              "dining": 66.7
            },
            "commute": {
              "overall": 62.1,
              "rent": 68.5,
              "commute": 59.0,
              "dining": 66.7
            },
            "food": {
              "overall": 64.9,
              "rent": 68.5,
              "commute": 59.0,
              "dining": 66.7
            }
          }
        },
        {
          "name": "深水埗",
          "nameZh": "深水埗",
          "nameEn": "Sham Shui Po",
          "code": "SSP",
          "lines": "TWL",
          "lat": 22.33061,
          "lng": 114.16221,
          "rent": {
            "medianRent": 13000,
            "medianPsf": 44.9,
            "medianSize": 302,
            "affordableShare": 0.691,
            "nAnalysis": 609,
            "quantiles": [
              5500,
              8500,
              13000,
              19800,
              30000
            ]
          },
          "commute": {
            "mtrMinutes": 9,
            "transferWalk": 1,
            "totalMinutes": 10,
            "transfers": 1,
            "connector": false,
            "connectorNote": "九龙塘站后步行至校园；本表时间仅为港铁段",
            "fare": 4.9,
            "firstTrain": "06:14",
            "lastTrain": "00:45",
            "route": "SSP > PRE > SKM > KOT"
          },
          "poi": {
            "total": 291,
            "restaurantDensity": 48.7,
            "fastFoodDensity": 11.1,
            "supermarketDensity": 10.5,
            "convenienceDensity": 18.5,
            "cheapShare": 0.186,
            "lowSample": false,
            "diningRaw": 77.0
          },
          "componentScores": {
            "rent": 73.0,
            "commute": 5.0,
            "dining": 0.0
          },
          "scores": {
            "balanced": {
              "overall": 31.5,
              "rent": 73.0,
              "commute": 5.0,
              "dining": 0.0
            },
            "budget": {
              "overall": 45.0,
              "rent": 73.0,
              "commute": 5.0,
              "dining": 0.0
            },
            "commute": {
              "overall": 21.5,
              "rent": 73.0,
              "commute": 5.0,
              "dining": 0.0
            },
            "food": {
              "overall": 23.4,
              "rent": 73.0,
              "commute": 5.0,
              "dining": 0.0
            }
          }
        },
        {
          "name": "旺角",
          "nameZh": "旺角",
          "nameEn": "Mong Kok",
          "code": "MOK",
          "lines": "KTL / TWL",
          "lat": 22.31947,
          "lng": 114.16931,
          "rent": {
            "medianRent": 13000,
            "medianPsf": 49.5,
            "medianSize": 253,
            "affordableShare": 0.693,
            "nAnalysis": 742,
            "quantiles": [
              7000,
              9200,
              13000,
              15950,
              20770
            ]
          },
          "commute": {
            "mtrMinutes": 7,
            "transferWalk": 0,
            "totalMinutes": 7,
            "transfers": 0,
            "connector": false,
            "connectorNote": "九龙塘站后步行至校园；本表时间仅为港铁段",
            "fare": 5.9,
            "firstTrain": "06:16",
            "lastTrain": "01:06",
            "route": "MOK > PRE > SKM > KOT"
          },
          "poi": {
            "total": 485,
            "restaurantDensity": 89.1,
            "fastFoodDensity": 18.5,
            "supermarketDensity": 13.4,
            "convenienceDensity": 27.4,
            "cheapShare": 0.172,
            "lowSample": false,
            "diningRaw": 92.5
          },
          "componentScores": {
            "rent": 53.5,
            "commute": 31.0,
            "dining": 100.0
          },
          "scores": {
            "balanced": {
              "overall": 50.4,
              "rent": 53.5,
              "commute": 31.0,
              "dining": 100.0
            },
            "budget": {
              "overall": 54.9,
              "rent": 53.5,
              "commute": 31.0,
              "dining": 100.0
            },
            "commute": {
              "overall": 43.5,
              "rent": 53.5,
              "commute": 31.0,
              "dining": 100.0
            },
            "food": {
              "overall": 65.3,
              "rent": 53.5,
              "commute": 31.0,
              "dining": 100.0
            }
          }
        },
        {
          "name": "大围",
          "nameZh": "大圍",
          "nameEn": "Tai Wai",
          "code": "TAW",
          "lines": "EAL / TML",
          "lat": 22.3728,
          "lng": 114.1789,
          "rent": {
            "medianRent": 21400,
            "medianPsf": 47.1,
            "medianSize": 472,
            "affordableShare": 0.239,
            "nAnalysis": 715,
            "quantiles": [
              12880,
              15500,
              21400,
              32000,
              42000
            ]
          },
          "commute": {
            "mtrMinutes": 6,
            "transferWalk": 0,
            "totalMinutes": 6,
            "transfers": 0,
            "connector": false,
            "connectorNote": "九龙塘站后步行至校园；本表时间仅为港铁段",
            "fare": 6.7,
            "firstTrain": "05:40",
            "lastTrain": "01:01",
            "route": "TAW > KOT"
          },
          "poi": {
            "total": 47,
            "restaurantDensity": 6.4,
            "fastFoodDensity": 3.5,
            "supermarketDensity": 1.9,
            "convenienceDensity": 2.5,
            "cheapShare": 0.355,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 26.0,
            "commute": 45.0,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 36.1,
              "rent": 26.0,
              "commute": 45.0,
              "dining": null
            },
            "budget": {
              "overall": 31.6,
              "rent": 26.0,
              "commute": 45.0,
              "dining": null
            },
            "commute": {
              "overall": 39.7,
              "rent": 26.0,
              "commute": 45.0,
              "dining": null
            },
            "food": {
              "overall": 35.5,
              "rent": 26.0,
              "commute": 45.0,
              "dining": null
            }
          }
        }
      ]
    },
    {
      "id": "polyu",
      "name": "香港理工大学",
      "short": "PolyU",
      "stations": [
        {
          "name": "红磡",
          "nameZh": "紅磡",
          "nameEn": "Hung Hom",
          "code": "HUH",
          "lines": "EAL / TML",
          "lat": 22.303,
          "lng": 114.181,
          "rent": {
            "medianRent": 19000,
            "medianPsf": 50.8,
            "medianSize": 391,
            "affordableShare": 0.252,
            "nAnalysis": 619,
            "quantiles": [
              13000,
              15000,
              19000,
              26500,
              40560
            ]
          },
          "commute": {
            "mtrMinutes": 0,
            "transferWalk": 0,
            "totalMinutes": 0,
            "transfers": 0,
            "connector": false,
            "connectorNote": "红磡站后步行至校园；本表时间仅为港铁段",
            "fare": 0.0,
            "firstTrain": "",
            "lastTrain": "",
            "route": "HUH"
          },
          "poi": {
            "total": 317,
            "restaurantDensity": 68.4,
            "fastFoodDensity": 14.0,
            "supermarketDensity": 6.0,
            "convenienceDensity": 10.5,
            "cheapShare": 0.17,
            "lowSample": false,
            "diningRaw": 73.3
          },
          "componentScores": {
            "rent": 32.5,
            "commute": 90.0,
            "dining": 50.0
          },
          "scores": {
            "balanced": {
              "overall": 61.0,
              "rent": 32.5,
              "commute": 90.0,
              "dining": 50.0
            },
            "budget": {
              "overall": 49.5,
              "rent": 32.5,
              "commute": 90.0,
              "dining": 50.0
            },
            "commute": {
              "overall": 71.6,
              "rent": 32.5,
              "commute": 90.0,
              "dining": 50.0
            },
            "food": {
              "overall": 56.8,
              "rent": 32.5,
              "commute": 90.0,
              "dining": 50.0
            }
          }
        },
        {
          "name": "何文田",
          "nameZh": "何文田",
          "nameEn": "Ho Man Tin",
          "code": "HOM",
          "lines": "KTL / TML",
          "lat": 22.3094,
          "lng": 114.1829,
          "rent": {
            "medianRent": 35000,
            "medianPsf": 53.0,
            "medianSize": 740,
            "affordableShare": 0.094,
            "nAnalysis": 470,
            "quantiles": [
              15500,
              22000,
              35000,
              57375,
              80000
            ]
          },
          "commute": {
            "mtrMinutes": 4,
            "transferWalk": 0,
            "totalMinutes": 4,
            "transfers": 0,
            "connector": false,
            "connectorNote": "红磡站后步行至校园；本表时间仅为港铁段",
            "fare": 4.9,
            "firstTrain": "06:14",
            "lastTrain": "00:50",
            "route": "HOM > HUH"
          },
          "poi": {
            "total": 158,
            "restaurantDensity": 28.0,
            "fastFoodDensity": 10.8,
            "supermarketDensity": 5.1,
            "convenienceDensity": 5.4,
            "cheapShare": 0.279,
            "lowSample": false,
            "diningRaw": 60.9
          },
          "componentScores": {
            "rent": 7.5,
            "commute": 72.5,
            "dining": 25.0
          },
          "scores": {
            "balanced": {
              "overall": 39.4,
              "rent": 7.5,
              "commute": 72.5,
              "dining": 25.0
            },
            "budget": {
              "overall": 26.4,
              "rent": 7.5,
              "commute": 72.5,
              "dining": 25.0
            },
            "commute": {
              "overall": 51.5,
              "rent": 7.5,
              "commute": 72.5,
              "dining": 25.0
            },
            "food": {
              "overall": 34.0,
              "rent": 7.5,
              "commute": 72.5,
              "dining": 25.0
            }
          }
        },
        {
          "name": "尖沙咀",
          "nameZh": "尖沙咀",
          "nameEn": "Tsim Sha Tsui",
          "code": "TST",
          "lines": "TWL",
          "lat": 22.29764,
          "lng": 114.17221,
          "rent": {
            "medianRent": 16000,
            "medianPsf": 55.4,
            "medianSize": 343,
            "affordableShare": 0.477,
            "nAnalysis": 643,
            "quantiles": [
              8000,
              9500,
              16000,
              30000,
              55000
            ]
          },
          "commute": {
            "mtrMinutes": 14,
            "transferWalk": 3,
            "totalMinutes": 17,
            "transfers": 1,
            "connector": false,
            "connectorNote": "红磡站后步行至校园；本表时间仅为港铁段",
            "fare": 4.7,
            "firstTrain": "06:01",
            "lastTrain": "00:50",
            "route": "TST > ADM > EXC > HUH"
          },
          "poi": {
            "total": 482,
            "restaurantDensity": 112.7,
            "fastFoodDensity": 14.0,
            "supermarketDensity": 6.4,
            "convenienceDensity": 18.1,
            "cheapShare": 0.111,
            "lowSample": false,
            "diningRaw": 79.8
          },
          "componentScores": {
            "rent": 38.8,
            "commute": 7.5,
            "dining": 75.0
          },
          "scores": {
            "balanced": {
              "overall": 30.1,
              "rent": 38.8,
              "commute": 7.5,
              "dining": 75.0
            },
            "budget": {
              "overall": 36.4,
              "rent": 38.8,
              "commute": 7.5,
              "dining": 75.0
            },
            "commute": {
              "overall": 22.1,
              "rent": 38.8,
              "commute": 7.5,
              "dining": 75.0
            },
            "food": {
              "overall": 43.9,
              "rent": 38.8,
              "commute": 7.5,
              "dining": 75.0
            }
          }
        },
        {
          "name": "旺角",
          "nameZh": "旺角",
          "nameEn": "Mong Kok",
          "code": "MOK",
          "lines": "KTL / TWL",
          "lat": 22.31947,
          "lng": 114.16931,
          "rent": {
            "medianRent": 13000,
            "medianPsf": 49.5,
            "medianSize": 253,
            "affordableShare": 0.693,
            "nAnalysis": 742,
            "quantiles": [
              7000,
              9200,
              13000,
              15950,
              20770
            ]
          },
          "commute": {
            "mtrMinutes": 11,
            "transferWalk": 3,
            "totalMinutes": 14,
            "transfers": 1,
            "connector": false,
            "connectorNote": "红磡站后步行至校园；本表时间仅为港铁段",
            "fare": 5.9,
            "firstTrain": "06:10",
            "lastTrain": "00:56",
            "route": "MOK > YMT > HOM > HUH"
          },
          "poi": {
            "total": 485,
            "restaurantDensity": 89.1,
            "fastFoodDensity": 18.5,
            "supermarketDensity": 13.4,
            "convenienceDensity": 27.4,
            "cheapShare": 0.172,
            "lowSample": false,
            "diningRaw": 92.5
          },
          "componentScores": {
            "rent": 92.5,
            "commute": 25.0,
            "dining": 100.0
          },
          "scores": {
            "balanced": {
              "overall": 63.2,
              "rent": 92.5,
              "commute": 25.0,
              "dining": 100.0
            },
            "budget": {
              "overall": 76.8,
              "rent": 92.5,
              "commute": 25.0,
              "dining": 100.0
            },
            "commute": {
              "overall": 49.4,
              "rent": 92.5,
              "commute": 25.0,
              "dining": 100.0
            },
            "food": {
              "overall": 75.2,
              "rent": 92.5,
              "commute": 25.0,
              "dining": 100.0
            }
          }
        },
        {
          "name": "土瓜湾",
          "nameZh": "土瓜灣",
          "nameEn": "To Kwa Wan",
          "code": "TKW",
          "lines": "TML",
          "lat": 22.3154,
          "lng": 114.1873,
          "rent": {
            "medianRent": 15800,
            "medianPsf": 45.7,
            "medianSize": 336,
            "affordableShare": 0.442,
            "nAnalysis": 362,
            "quantiles": [
              7500,
              12900,
              15800,
              18400,
              24200
            ]
          },
          "commute": {
            "mtrMinutes": 6,
            "transferWalk": 0,
            "totalMinutes": 6,
            "transfers": 0,
            "connector": false,
            "connectorNote": "红磡站后步行至校园；本表时间仅为港铁段",
            "fare": 4.9,
            "firstTrain": "06:12",
            "lastTrain": "00:47",
            "route": "TKW > HOM > HUH"
          },
          "poi": {
            "total": 120,
            "restaurantDensity": 22.6,
            "fastFoodDensity": 7.3,
            "supermarketDensity": 2.9,
            "convenienceDensity": 4.1,
            "cheapShare": 0.245,
            "lowSample": false,
            "diningRaw": 54.1
          },
          "componentScores": {
            "rent": 78.8,
            "commute": 55.0,
            "dining": 0.0
          },
          "scores": {
            "balanced": {
              "overall": 56.2,
              "rent": 78.8,
              "commute": 55.0,
              "dining": 0.0
            },
            "budget": {
              "overall": 61.0,
              "rent": 78.8,
              "commute": 55.0,
              "dining": 0.0
            },
            "commute": {
              "overall": 55.4,
              "rent": 78.8,
              "commute": 55.0,
              "dining": 0.0
            },
            "food": {
              "overall": 40.1,
              "rent": 78.8,
              "commute": 55.0,
              "dining": 0.0
            }
          }
        }
      ]
    },
    {
      "id": "hkbu",
      "name": "香港浸会大学",
      "short": "HKBU",
      "stations": [
        {
          "name": "九龙塘",
          "nameZh": "九龍塘",
          "nameEn": "Kowloon Tong",
          "code": "KOT",
          "lines": "EAL / KTL",
          "lat": 22.33687,
          "lng": 114.17622,
          "rent": {
            "medianRent": 46000,
            "medianPsf": 48.8,
            "medianSize": 1027,
            "affordableShare": 0.036,
            "nAnalysis": 110,
            "quantiles": [
              28900,
              36125,
              46000,
              70000,
              78000
            ]
          },
          "commute": {
            "mtrMinutes": 0,
            "transferWalk": 0,
            "totalMinutes": 0,
            "transfers": 0,
            "connector": false,
            "connectorNote": "九龙塘站后步行至校园；本表时间仅为港铁段",
            "fare": 0.0,
            "firstTrain": "",
            "lastTrain": "",
            "route": "KOT"
          },
          "poi": {
            "total": 35,
            "restaurantDensity": 5.7,
            "fastFoodDensity": 1.9,
            "supermarketDensity": 1.6,
            "convenienceDensity": 1.6,
            "cheapShare": 0.25,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 6.0,
            "commute": 87.0,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 48.9,
              "rent": 6.0,
              "commute": 87.0,
              "dining": null
            },
            "budget": {
              "overall": 29.8,
              "rent": 6.0,
              "commute": 87.0,
              "dining": null
            },
            "commute": {
              "overall": 64.5,
              "rent": 6.0,
              "commute": 87.0,
              "dining": null
            },
            "food": {
              "overall": 46.5,
              "rent": 6.0,
              "commute": 87.0,
              "dining": null
            }
          }
        },
        {
          "name": "石硖尾",
          "nameZh": "石硤尾",
          "nameEn": "Shek Kip Mei",
          "code": "SKM",
          "lines": "KTL",
          "lat": 22.33182,
          "lng": 114.16842,
          "rent": {
            "medianRent": 13000,
            "medianPsf": 44.9,
            "medianSize": 302,
            "affordableShare": 0.691,
            "nAnalysis": 609,
            "quantiles": [
              5500,
              8500,
              13000,
              19800,
              30000
            ]
          },
          "commute": {
            "mtrMinutes": 3,
            "transferWalk": 0,
            "totalMinutes": 3,
            "transfers": 0,
            "connector": false,
            "connectorNote": "九龙塘站后步行至校园；本表时间仅为港铁段",
            "fare": 4.9,
            "firstTrain": "06:19",
            "lastTrain": "01:09",
            "route": "SKM > KOT"
          },
          "poi": {
            "total": 285,
            "restaurantDensity": 49.7,
            "fastFoodDensity": 11.8,
            "supermarketDensity": 9.2,
            "convenienceDensity": 16.6,
            "cheapShare": 0.192,
            "lowSample": false,
            "diningRaw": 78.2
          },
          "componentScores": {
            "rent": 73.0,
            "commute": 73.0,
            "dining": 33.3
          },
          "scores": {
            "balanced": {
              "overall": 67.0,
              "rent": 73.0,
              "commute": 73.0,
              "dining": 33.3
            },
            "budget": {
              "overall": 67.0,
              "rent": 73.0,
              "commute": 73.0,
              "dining": 33.3
            },
            "commute": {
              "overall": 69.0,
              "rent": 73.0,
              "commute": 73.0,
              "dining": 33.3
            },
            "food": {
              "overall": 57.1,
              "rent": 73.0,
              "commute": 73.0,
              "dining": 33.3
            }
          }
        },
        {
          "name": "太子",
          "nameZh": "太子",
          "nameEn": "Prince Edward",
          "code": "PRE",
          "lines": "KTL / TWL",
          "lat": 22.32445,
          "lng": 114.16846,
          "rent": {
            "medianRent": 13000,
            "medianPsf": 44.9,
            "medianSize": 314,
            "affordableShare": 0.613,
            "nAnalysis": 274,
            "quantiles": [
              6630,
              8500,
              13000,
              16575,
              21560
            ]
          },
          "commute": {
            "mtrMinutes": 5,
            "transferWalk": 0,
            "totalMinutes": 5,
            "transfers": 0,
            "connector": false,
            "connectorNote": "九龙塘站后步行至校园；本表时间仅为港铁段",
            "fare": 4.9,
            "firstTrain": "06:18",
            "lastTrain": "01:07",
            "route": "PRE > SKM > KOT"
          },
          "poi": {
            "total": 450,
            "restaurantDensity": 82.8,
            "fastFoodDensity": 15.6,
            "supermarketDensity": 13.1,
            "convenienceDensity": 25.1,
            "cheapShare": 0.159,
            "lowSample": false,
            "diningRaw": 86.1
          },
          "componentScores": {
            "rent": 68.5,
            "commute": 59.0,
            "dining": 66.7
          },
          "scores": {
            "balanced": {
              "overall": 64.0,
              "rent": 68.5,
              "commute": 59.0,
              "dining": 66.7
            },
            "budget": {
              "overall": 65.9,
              "rent": 68.5,
              "commute": 59.0,
              "dining": 66.7
            },
            "commute": {
              "overall": 62.1,
              "rent": 68.5,
              "commute": 59.0,
              "dining": 66.7
            },
            "food": {
              "overall": 64.9,
              "rent": 68.5,
              "commute": 59.0,
              "dining": 66.7
            }
          }
        },
        {
          "name": "深水埗",
          "nameZh": "深水埗",
          "nameEn": "Sham Shui Po",
          "code": "SSP",
          "lines": "TWL",
          "lat": 22.33061,
          "lng": 114.16221,
          "rent": {
            "medianRent": 13000,
            "medianPsf": 44.9,
            "medianSize": 302,
            "affordableShare": 0.691,
            "nAnalysis": 609,
            "quantiles": [
              5500,
              8500,
              13000,
              19800,
              30000
            ]
          },
          "commute": {
            "mtrMinutes": 9,
            "transferWalk": 1,
            "totalMinutes": 10,
            "transfers": 1,
            "connector": false,
            "connectorNote": "九龙塘站后步行至校园；本表时间仅为港铁段",
            "fare": 4.9,
            "firstTrain": "06:14",
            "lastTrain": "00:45",
            "route": "SSP > PRE > SKM > KOT"
          },
          "poi": {
            "total": 291,
            "restaurantDensity": 48.7,
            "fastFoodDensity": 11.1,
            "supermarketDensity": 10.5,
            "convenienceDensity": 18.5,
            "cheapShare": 0.186,
            "lowSample": false,
            "diningRaw": 77.0
          },
          "componentScores": {
            "rent": 73.0,
            "commute": 5.0,
            "dining": 0.0
          },
          "scores": {
            "balanced": {
              "overall": 31.5,
              "rent": 73.0,
              "commute": 5.0,
              "dining": 0.0
            },
            "budget": {
              "overall": 45.0,
              "rent": 73.0,
              "commute": 5.0,
              "dining": 0.0
            },
            "commute": {
              "overall": 21.5,
              "rent": 73.0,
              "commute": 5.0,
              "dining": 0.0
            },
            "food": {
              "overall": 23.4,
              "rent": 73.0,
              "commute": 5.0,
              "dining": 0.0
            }
          }
        },
        {
          "name": "旺角",
          "nameZh": "旺角",
          "nameEn": "Mong Kok",
          "code": "MOK",
          "lines": "KTL / TWL",
          "lat": 22.31947,
          "lng": 114.16931,
          "rent": {
            "medianRent": 13000,
            "medianPsf": 49.5,
            "medianSize": 253,
            "affordableShare": 0.693,
            "nAnalysis": 742,
            "quantiles": [
              7000,
              9200,
              13000,
              15950,
              20770
            ]
          },
          "commute": {
            "mtrMinutes": 7,
            "transferWalk": 0,
            "totalMinutes": 7,
            "transfers": 0,
            "connector": false,
            "connectorNote": "九龙塘站后步行至校园；本表时间仅为港铁段",
            "fare": 5.9,
            "firstTrain": "06:16",
            "lastTrain": "01:06",
            "route": "MOK > PRE > SKM > KOT"
          },
          "poi": {
            "total": 485,
            "restaurantDensity": 89.1,
            "fastFoodDensity": 18.5,
            "supermarketDensity": 13.4,
            "convenienceDensity": 27.4,
            "cheapShare": 0.172,
            "lowSample": false,
            "diningRaw": 92.5
          },
          "componentScores": {
            "rent": 53.5,
            "commute": 31.0,
            "dining": 100.0
          },
          "scores": {
            "balanced": {
              "overall": 50.4,
              "rent": 53.5,
              "commute": 31.0,
              "dining": 100.0
            },
            "budget": {
              "overall": 54.9,
              "rent": 53.5,
              "commute": 31.0,
              "dining": 100.0
            },
            "commute": {
              "overall": 43.5,
              "rent": 53.5,
              "commute": 31.0,
              "dining": 100.0
            },
            "food": {
              "overall": 65.3,
              "rent": 53.5,
              "commute": 31.0,
              "dining": 100.0
            }
          }
        },
        {
          "name": "大围",
          "nameZh": "大圍",
          "nameEn": "Tai Wai",
          "code": "TAW",
          "lines": "EAL / TML",
          "lat": 22.3728,
          "lng": 114.1789,
          "rent": {
            "medianRent": 21400,
            "medianPsf": 47.1,
            "medianSize": 472,
            "affordableShare": 0.239,
            "nAnalysis": 715,
            "quantiles": [
              12880,
              15500,
              21400,
              32000,
              42000
            ]
          },
          "commute": {
            "mtrMinutes": 6,
            "transferWalk": 0,
            "totalMinutes": 6,
            "transfers": 0,
            "connector": false,
            "connectorNote": "九龙塘站后步行至校园；本表时间仅为港铁段",
            "fare": 6.7,
            "firstTrain": "05:40",
            "lastTrain": "01:01",
            "route": "TAW > KOT"
          },
          "poi": {
            "total": 47,
            "restaurantDensity": 6.4,
            "fastFoodDensity": 3.5,
            "supermarketDensity": 1.9,
            "convenienceDensity": 2.5,
            "cheapShare": 0.355,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 26.0,
            "commute": 45.0,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 36.1,
              "rent": 26.0,
              "commute": 45.0,
              "dining": null
            },
            "budget": {
              "overall": 31.6,
              "rent": 26.0,
              "commute": 45.0,
              "dining": null
            },
            "commute": {
              "overall": 39.7,
              "rent": 26.0,
              "commute": 45.0,
              "dining": null
            },
            "food": {
              "overall": 35.5,
              "rent": 26.0,
              "commute": 45.0,
              "dining": null
            }
          }
        }
      ]
    },
    {
      "id": "lingnan",
      "name": "岭南大学",
      "short": "Lingnan",
      "stations": [
        {
          "name": "兆康",
          "nameZh": "兆康",
          "nameEn": "Siu Hong",
          "code": "SIH",
          "lines": "TML",
          "lat": 22.4115,
          "lng": 113.978,
          "rent": {
            "medianRent": 12800,
            "medianPsf": 30.9,
            "medianSize": 424,
            "affordableShare": 0.746,
            "nAnalysis": 393,
            "quantiles": [
              7960,
              11000,
              12800,
              15200,
              18460
            ]
          },
          "commute": {
            "mtrMinutes": 0,
            "transferWalk": 0,
            "totalMinutes": 0,
            "transfers": 0,
            "connector": true,
            "connectorNote": "兆康站后仍需步行或地面交通接驳；本表时间仅为港铁段",
            "fare": 0.0,
            "firstTrain": "",
            "lastTrain": "",
            "route": "SIH"
          },
          "poi": {
            "total": 65,
            "restaurantDensity": 13.7,
            "fastFoodDensity": 2.5,
            "supermarketDensity": 1.6,
            "convenienceDensity": 2.9,
            "cheapShare": 0.157,
            "lowSample": false,
            "diningRaw": 35.7
          },
          "componentScores": {
            "rent": 90.0,
            "commute": 85.0,
            "dining": 25.0
          },
          "scores": {
            "balanced": {
              "overall": 78.0,
              "rent": 90.0,
              "commute": 85.0,
              "dining": 25.0
            },
            "budget": {
              "overall": 79.0,
              "rent": 90.0,
              "commute": 85.0,
              "dining": 25.0
            },
            "commute": {
              "overall": 80.3,
              "rent": 90.0,
              "commute": 85.0,
              "dining": 25.0
            },
            "food": {
              "overall": 62.5,
              "rent": 90.0,
              "commute": 85.0,
              "dining": 25.0
            }
          }
        },
        {
          "name": "屯门",
          "nameZh": "屯門",
          "nameEn": "Tuen Mun",
          "code": "TUM",
          "lines": "TML",
          "lat": 22.3945,
          "lng": 113.9728,
          "rent": {
            "medianRent": 13500,
            "medianPsf": 31.1,
            "medianSize": 455,
            "affordableShare": 0.622,
            "nAnalysis": 669,
            "quantiles": [
              9000,
              11300,
              13500,
              17500,
              28400
            ]
          },
          "commute": {
            "mtrMinutes": 4,
            "transferWalk": 0,
            "totalMinutes": 4,
            "transfers": 0,
            "connector": true,
            "connectorNote": "兆康站后仍需步行或地面交通接驳；本表时间仅为港铁段",
            "fare": 5.3,
            "firstTrain": "05:45",
            "lastTrain": "00:15",
            "route": "TUM > SIH"
          },
          "poi": {
            "total": 69,
            "restaurantDensity": 12.4,
            "fastFoodDensity": 3.8,
            "supermarketDensity": 2.5,
            "convenienceDensity": 2.9,
            "cheapShare": 0.235,
            "lowSample": false,
            "diningRaw": 44.8
          },
          "componentScores": {
            "rent": 51.7,
            "commute": 61.7,
            "dining": 100.0
          },
          "scores": {
            "balanced": {
              "overall": 63.4,
              "rent": 51.7,
              "commute": 61.7,
              "dining": 100.0
            },
            "budget": {
              "overall": 61.4,
              "rent": 51.7,
              "commute": 61.7,
              "dining": 100.0
            },
            "commute": {
              "overall": 63.0,
              "rent": 51.7,
              "commute": 61.7,
              "dining": 100.0
            },
            "food": {
              "overall": 74.0,
              "rent": 51.7,
              "commute": 61.7,
              "dining": 100.0
            }
          }
        },
        {
          "name": "天水围",
          "nameZh": "天水圍",
          "nameEn": "Tin Shui Wai",
          "code": "TIS",
          "lines": "TML",
          "lat": 22.4593,
          "lng": 114.0045,
          "rent": {
            "medianRent": 14250,
            "medianPsf": 28.9,
            "medianSize": 475,
            "affordableShare": 0.684,
            "nAnalysis": 244,
            "quantiles": [
              8720,
              12500,
              14250,
              15925,
              18000
            ]
          },
          "commute": {
            "mtrMinutes": 6,
            "transferWalk": 0,
            "totalMinutes": 6,
            "transfers": 0,
            "connector": true,
            "connectorNote": "兆康站后仍需步行或地面交通接驳；本表时间仅为港铁段",
            "fare": 5.4,
            "firstTrain": "06:12",
            "lastTrain": "01:03",
            "route": "TIS > SIH"
          },
          "poi": {
            "total": 15,
            "restaurantDensity": 2.2,
            "fastFoodDensity": 0.6,
            "supermarketDensity": 1.3,
            "convenienceDensity": 0.6,
            "cheapShare": 0.222,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 58.3,
            "commute": 38.3,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 47.7,
              "rent": 58.3,
              "commute": 38.3,
              "dining": null
            },
            "budget": {
              "overall": 52.4,
              "rent": 58.3,
              "commute": 38.3,
              "dining": null
            },
            "commute": {
              "overall": 43.9,
              "rent": 58.3,
              "commute": 38.3,
              "dining": null
            },
            "food": {
              "overall": 48.3,
              "rent": 58.3,
              "commute": 38.3,
              "dining": null
            }
          }
        },
        {
          "name": "元朗",
          "nameZh": "元朗",
          "nameEn": "Yuen Long",
          "code": "YUL",
          "lines": "TML",
          "lat": 22.4449,
          "lng": 114.035,
          "rent": {
            "medianRent": 15000,
            "medianPsf": 33.3,
            "medianSize": 475,
            "affordableShare": 0.506,
            "nAnalysis": 859,
            "quantiles": [
              6980,
              10500,
              15000,
              20800,
              32000
            ]
          },
          "commute": {
            "mtrMinutes": 11,
            "transferWalk": 0,
            "totalMinutes": 11,
            "transfers": 0,
            "connector": true,
            "connectorNote": "兆康站后仍需步行或地面交通接驳；本表时间仅为港铁段",
            "fare": 5.8,
            "firstTrain": "06:07",
            "lastTrain": "00:58",
            "route": "YUL > LOP > TIS > SIH"
          },
          "poi": {
            "total": 62,
            "restaurantDensity": 11.5,
            "fastFoodDensity": 2.2,
            "supermarketDensity": 2.2,
            "convenienceDensity": 2.9,
            "cheapShare": 0.163,
            "lowSample": false,
            "diningRaw": 35.7
          },
          "componentScores": {
            "rent": 0.0,
            "commute": 15.0,
            "dining": 25.0
          },
          "scores": {
            "balanced": {
              "overall": 10.5,
              "rent": 0.0,
              "commute": 15.0,
              "dining": 25.0
            },
            "budget": {
              "overall": 7.5,
              "rent": 0.0,
              "commute": 15.0,
              "dining": 25.0
            },
            "commute": {
              "overall": 12.2,
              "rent": 0.0,
              "commute": 15.0,
              "dining": 25.0
            },
            "food": {
              "overall": 14.5,
              "rent": 0.0,
              "commute": 15.0,
              "dining": 25.0
            }
          }
        }
      ]
    },
    {
      "id": "eduhk",
      "name": "香港教育大学",
      "short": "EdUHK",
      "stations": [
        {
          "name": "大埔墟",
          "nameZh": "大埔墟",
          "nameEn": "Tai Po Market",
          "code": "TAP",
          "lines": "EAL",
          "lat": 22.44455,
          "lng": 114.169,
          "rent": {
            "medianRent": 19000,
            "medianPsf": 39.7,
            "medianSize": 530,
            "affordableShare": 0.37,
            "nAnalysis": 662,
            "quantiles": [
              10800,
              13500,
              19000,
              29800,
              47000
            ]
          },
          "commute": {
            "mtrMinutes": 0,
            "transferWalk": 0,
            "totalMinutes": 0,
            "transfers": 0,
            "connector": true,
            "connectorNote": "大埔墟站后仍需巴士/小巴或其他道路接驳至校园；本表时间仅为港铁段",
            "fare": 0.0,
            "firstTrain": "",
            "lastTrain": "",
            "route": "TAP"
          },
          "poi": {
            "total": 140,
            "restaurantDensity": 24.2,
            "fastFoodDensity": 5.1,
            "supermarketDensity": 8.0,
            "convenienceDensity": 6.0,
            "cheapShare": 0.174,
            "lowSample": false,
            "diningRaw": 55.7
          },
          "componentScores": {
            "rent": 75.0,
            "commute": 85.0,
            "dining": 0.0
          },
          "scores": {
            "balanced": {
              "overall": 68.2,
              "rent": 75.0,
              "commute": 85.0,
              "dining": 0.0
            },
            "budget": {
              "overall": 66.2,
              "rent": 75.0,
              "commute": 85.0,
              "dining": 0.0
            },
            "commute": {
              "overall": 74.0,
              "rent": 75.0,
              "commute": 85.0,
              "dining": 0.0
            },
            "food": {
              "overall": 48.0,
              "rent": 75.0,
              "commute": 85.0,
              "dining": 0.0
            }
          }
        },
        {
          "name": "太和",
          "nameZh": "太和",
          "nameEn": "Tai Wo",
          "code": "TWO",
          "lines": "EAL",
          "lat": 22.4507,
          "lng": 114.1613,
          "rent": {
            "medianRent": 19000,
            "medianPsf": 39.7,
            "medianSize": 530,
            "affordableShare": 0.37,
            "nAnalysis": 662,
            "quantiles": [
              10800,
              13500,
              19000,
              29800,
              47000
            ]
          },
          "commute": {
            "mtrMinutes": 4,
            "transferWalk": 0,
            "totalMinutes": 4,
            "transfers": 0,
            "connector": true,
            "connectorNote": "大埔墟站后仍需巴士/小巴或其他道路接驳至校园；本表时间仅为港铁段",
            "fare": 4.0,
            "firstTrain": "05:49",
            "lastTrain": "00:43",
            "route": "TWO > TAP"
          },
          "poi": {
            "total": 172,
            "restaurantDensity": 31.2,
            "fastFoodDensity": 4.8,
            "supermarketDensity": 9.2,
            "convenienceDensity": 7.6,
            "cheapShare": 0.133,
            "lowSample": false,
            "diningRaw": 59.6
          },
          "componentScores": {
            "rent": 75.0,
            "commute": 50.0,
            "dining": 100.0
          },
          "scores": {
            "balanced": {
              "overall": 67.5,
              "rent": 75.0,
              "commute": 50.0,
              "dining": 100.0
            },
            "budget": {
              "overall": 72.5,
              "rent": 75.0,
              "commute": 50.0,
              "dining": 100.0
            },
            "commute": {
              "overall": 61.2,
              "rent": 75.0,
              "commute": 50.0,
              "dining": 100.0
            },
            "food": {
              "overall": 77.5,
              "rent": 75.0,
              "commute": 50.0,
              "dining": 100.0
            }
          }
        },
        {
          "name": "沙田",
          "nameZh": "沙田",
          "nameEn": "Sha Tin",
          "code": "SHT",
          "lines": "EAL",
          "lat": 22.38255,
          "lng": 114.1876,
          "rent": {
            "medianRent": 21400,
            "medianPsf": 47.1,
            "medianSize": 472,
            "affordableShare": 0.239,
            "nAnalysis": 715,
            "quantiles": [
              12880,
              15500,
              21400,
              32000,
              42000
            ]
          },
          "commute": {
            "mtrMinutes": 13,
            "transferWalk": 0,
            "totalMinutes": 13,
            "transfers": 0,
            "connector": true,
            "connectorNote": "大埔墟站后仍需巴士/小巴或其他道路接驳至校园；本表时间仅为港铁段",
            "fare": 6.5,
            "firstTrain": "05:35",
            "lastTrain": "00:44",
            "route": "SHT > FOT > UNI > TAP"
          },
          "poi": {
            "total": 44,
            "restaurantDensity": 5.4,
            "fastFoodDensity": 3.2,
            "supermarketDensity": 2.2,
            "convenienceDensity": 2.2,
            "cheapShare": 0.37,
            "lowSample": true,
            "diningRaw": null
          },
          "componentScores": {
            "rent": 0.0,
            "commute": 15.0,
            "dining": null
          },
          "scores": {
            "balanced": {
              "overall": 7.9,
              "rent": 0.0,
              "commute": 15.0,
              "dining": null
            },
            "budget": {
              "overall": 4.4,
              "rent": 0.0,
              "commute": 15.0,
              "dining": null
            },
            "commute": {
              "overall": 10.8,
              "rent": 0.0,
              "commute": 15.0,
              "dining": null
            },
            "food": {
              "overall": 7.5,
              "rent": 0.0,
              "commute": 15.0,
              "dining": null
            }
          }
        }
      ]
    }
  ]
};
