//call api with current UTC adjusted for timezone offset? convert the resulting min to hours

const test = {
    "hours": [
        {
            "airTemperature": {
                "noaa": 27.33,
                "sg": 27.33
            },
            "cloudCover": {
                "noaa": 8.8,
                "sg": 8.8
            },
            "gust": {
                "noaa": 4.11,
                "sg": 4.11
            },
            "precipitation": {
                "noaa": 0.01,
                "sg": 0.01
            },
            "seaLevel": {
                "meto": 0.6,
                "sg": 0.6
            },
            "secondarySwellDirection": {
                "noaa": 339.19,
                "sg": 339.19
            },
            "secondarySwellHeight": {
                "noaa": 0.33,
                "sg": 0.33
            },
            "secondarySwellPeriod": {
                "noaa": 11,
                "sg": 11
            },
            "swellDirection": {
                "icon": 39.23,
                "meteo": 204.78,
                "noaa": 186.41,
                "sg": 204.78
            },
            "swellHeight": {
                "icon": 1.7,
                "meteo": 0.55,
                "noaa": 0.26,
                "sg": 0.55
            },
            "swellPeriod": {
                "icon": 10.22,
                "meteo": 10.21,
                "noaa": 12.83,
                "sg": 10.21
            },
            "time": "2022-08-27T02:00:00+00:00",
            "waterTemperature": {
                "meto": 26.32,
                "noaa": 35.43,
                "sg": 26.32
            },
            "waveHeight": {
                "icon": 2.07,
                "meteo": 1.3,
                "noaa": 1.18,
                "sg": 1.3
            },
            "wavePeriod": {
                "icon": 8.42,
                "meteo": 4.46,
                "noaa": 9.5,
                "sg": 4.46
            },
            "windDirection": {
                "icon": 67.18,
                "noaa": 73.89,
                "sg": 67.18
            },
            "windSpeed": {
                "icon": 8.48,
                "noaa": 3.34,
                "sg": 8.48
            }
        },
        {
            "airTemperature": {
                "noaa": 26.67,
                "sg": 26.67
            },
            "cloudCover": {
                "noaa": 13.2,
                "sg": 13.2
            },
            "gust": {
                "noaa": 4.05,
                "sg": 4.05
            },
            "precipitation": {
                "noaa": 0.01,
                "sg": 0.01
            },
            "seaLevel": {
                "meto": 0.6,
                "sg": 0.6
            },
            "secondarySwellDirection": {
                "noaa": 344.26,
                "sg": 344.26
            },
            "secondarySwellHeight": {
                "noaa": 0.33,
                "sg": 0.33
            },
            "secondarySwellPeriod": {
                "noaa": 11.39,
                "sg": 11.39
            },
            "swellDirection": {
                "icon": 47.9,
                "meteo": 166.39,
                "noaa": 185.59,
                "sg": 166.39
            },
            "swellHeight": {
                "icon": 1.71,
                "meteo": 0.58,
                "noaa": 0.26,
                "sg": 0.58
            },
            "swellPeriod": {
                "icon": 10.13,
                "meteo": 9.83,
                "noaa": 13.25,
                "sg": 9.83
            },
            "time": "2022-08-27T03:00:00+00:00",
            "waterTemperature": {
                "meto": 26.32,
                "noaa": 32.98,
                "sg": 26.32
            },
            "waveHeight": {
                "icon": 2.13,
                "meteo": 1.34,
                "noaa": 1.22,
                "sg": 1.34
            },
            "wavePeriod": {
                "icon": 8.21,
                "meteo": 4.41,
                "noaa": 9.22,
                "sg": 4.41
            },
            "windDirection": {
                "icon": 68.52,
                "noaa": 74.61,
                "sg": 68.52
            },
            "windSpeed": {
                "icon": 8.72,
                "noaa": 3.38,
                "sg": 8.72
            }
        },
        {
            "airTemperature": {
                "noaa": 25.73,
                "sg": 25.73
            },
            "cloudCover": {
                "noaa": 23.97,
                "sg": 23.97
            },
            "gust": {
                "noaa": 4.79,
                "sg": 4.79
            },
            "precipitation": {
                "noaa": 0.02,
                "sg": 0.02
            },
            "seaLevel": {
                "meto": 0.6,
                "sg": 0.6
            },
            "secondarySwellDirection": {
                "noaa": 344.3,
                "sg": 344.3
            },
            "secondarySwellHeight": {
                "noaa": 0.32,
                "sg": 0.32
            },
            "secondarySwellPeriod": {
                "noaa": 11.35,
                "sg": 11.35
            },
            "swellDirection": {
                "icon": 58.08,
                "meteo": 131,
                "noaa": 191.02,
                "sg": 131
            },
            "swellHeight": {
                "icon": 1.76,
                "meteo": 0.66,
                "noaa": 0.24,
                "sg": 0.66
            },
            "swellPeriod": {
                "icon": 9.87,
                "meteo": 7.92,
                "noaa": 13,
                "sg": 7.92
            },
            "time": "2022-08-27T04:00:00+00:00",
            "waterTemperature": {
                "meto": 26.31,
                "noaa": 30.08,
                "sg": 26.31
            },
            "waveHeight": {
                "icon": 2.15,
                "meteo": 1.33,
                "noaa": 1.25,
                "sg": 1.33
            },
            "wavePeriod": {
                "icon": 8.15,
                "meteo": 4.48,
                "noaa": 8.05,
                "sg": 4.48
            },
            "windDirection": {
                "icon": 67.15,
                "noaa": 76.58,
                "sg": 67.15
            },
            "windSpeed": {
                "icon": 8.62,
                "noaa": 3.24,
                "sg": 8.62
            }
        },
        {
            "airTemperature": {
                "noaa": 24.78,
                "sg": 24.78
            },
            "cloudCover": {
                "noaa": 34.73,
                "sg": 34.73
            },
            "gust": {
                "noaa": 5.54,
                "sg": 5.54
            },
            "precipitation": {
                "noaa": 0.04,
                "sg": 0.04
            },
            "seaLevel": {
                "meto": 0.6,
                "sg": 0.6
            },
            "secondarySwellDirection": {
                "noaa": 344.33,
                "sg": 344.33
            },
            "secondarySwellHeight": {
                "noaa": 0.32,
                "sg": 0.32
            },
            "secondarySwellPeriod": {
                "noaa": 11.3,
                "sg": 11.3
            },
            "swellDirection": {
                "icon": 68.26,
                "meteo": 95.61,
                "noaa": 196.44,
                "sg": 95.61
            },
            "swellHeight": {
                "icon": 1.8,
                "meteo": 0.74,
                "noaa": 0.21,
                "sg": 0.74
            },
            "swellPeriod": {
                "icon": 9.62,
                "meteo": 6.02,
                "noaa": 12.75,
                "sg": 6.02
            },
            "time": "2022-08-27T05:00:00+00:00",
            "waterTemperature": {
                "meto": 26.31,
                "noaa": 27.18,
                "sg": 26.31
            },
            "waveHeight": {
                "icon": 2.17,
                "meteo": 1.32,
                "noaa": 1.29,
                "sg": 1.32
            },
            "wavePeriod": {
                "icon": 8.09,
                "meteo": 4.56,
                "noaa": 6.87,
                "sg": 4.56
            },
            "windDirection": {
                "icon": 65.79,
                "noaa": 78.55,
                "sg": 65.79
            },
            "windSpeed": {
                "icon": 8.51,
                "noaa": 3.09,
                "sg": 8.51
            }
        },
        {
            "airTemperature": {
                "noaa": 23.83,
                "sg": 23.83
            },
            "cloudCover": {
                "noaa": 45.5,
                "sg": 45.5
            },
            "gust": {
                "noaa": 6.28,
                "sg": 6.28
            },
            "precipitation": {
                "noaa": 0.05,
                "sg": 0.05
            },
            "seaLevel": {
                "meto": 0.6,
                "sg": 0.6
            },
            "secondarySwellDirection": {
                "noaa": 344.37,
                "sg": 344.37
            },
            "secondarySwellHeight": {
                "noaa": 0.31,
                "sg": 0.31
            },
            "secondarySwellPeriod": {
                "noaa": 11.26,
                "sg": 11.26
            },
            "swellDirection": {
                "icon": 78.44,
                "meteo": 60.22,
                "noaa": 201.87,
                "sg": 60.22
            },
            "swellHeight": {
                "icon": 1.85,
                "meteo": 0.82,
                "noaa": 0.19,
                "sg": 0.82
            },
            "swellPeriod": {
                "icon": 9.36,
                "meteo": 4.11,
                "noaa": 12.5,
                "sg": 4.11
            },
            "time": "2022-08-27T06:00:00+00:00",
            "waterTemperature": {
                "meto": 26.31,
                "noaa": 24.28,
                "sg": 26.31
            },
            "waveHeight": {
                "icon": 2.19,
                "meteo": 1.31,
                "noaa": 1.32,
                "sg": 1.31
            },
            "wavePeriod": {
                "icon": 8.03,
                "meteo": 4.63,
                "noaa": 5.7,
                "sg": 4.63
            },
            "windDirection": {
                "icon": 64.42,
                "noaa": 80.52,
                "sg": 64.42
            },
            "windSpeed": {
                "icon": 8.41,
                "noaa": 2.95,
                "sg": 8.41
            }
        },
        {
            "airTemperature": {
                "noaa": 23.59,
                "sg": 23.59
            },
            "cloudCover": {
                "noaa": 41.47,
                "sg": 41.47
            },
            "gust": {
                "noaa": 6.82,
                "sg": 6.82
            },
            "precipitation": {
                "noaa": 0.04,
                "sg": 0.04
            },
            "seaLevel": {
                "meto": 0.6,
                "sg": 0.6
            },
            "secondarySwellDirection": {
                "noaa": 287.87,
                "sg": 287.87
            },
            "secondarySwellHeight": {
                "noaa": 0.34,
                "sg": 0.34
            },
            "secondarySwellPeriod": {
                "noaa": 11.23,
                "sg": 11.23
            },
            "swellDirection": {
                "icon": 79.7,
                "meteo": 59.93,
                "noaa": 208.91,
                "sg": 59.93
            },
            "swellHeight": {
                "icon": 1.87,
                "meteo": 0.8,
                "noaa": 0.19,
                "sg": 0.8
            },
            "swellPeriod": {
                "icon": 9.28,
                "meteo": 4.17,
                "noaa": 12.83,
                "sg": 4.17
            },
            "time": "2022-08-27T07:00:00+00:00",
            "waterTemperature": {
                "meto": 26.31,
                "noaa": 23.92,
                "sg": 26.31
            },
            "waveHeight": {
                "icon": 2.19,
                "meteo": 1.3,
                "noaa": 1.3,
                "sg": 1.3
            },
            "wavePeriod": {
                "icon": 8,
                "meteo": 4.65,
                "noaa": 5.82,
                "sg": 4.65
            },
            "windDirection": {
                "icon": 66.05,
                "noaa": 82.22,
                "sg": 66.05
            },
            "windSpeed": {
                "icon": 8.37,
                "noaa": 3.14,
                "sg": 8.37
            }
        },
        {
            "airTemperature": {
                "noaa": 23.36,
                "sg": 23.36
            },
            "cloudCover": {
                "noaa": 37.43,
                "sg": 37.43
            },
            "gust": {
                "noaa": 7.37,
                "sg": 7.37
            },
            "precipitation": {
                "noaa": 0.03,
                "sg": 0.03
            },
            "seaLevel": {
                "meto": 0.59,
                "sg": 0.59
            },
            "secondarySwellDirection": {
                "noaa": 231.38,
                "sg": 231.38
            },
            "secondarySwellHeight": {
                "noaa": 0.38,
                "sg": 0.38
            },
            "secondarySwellPeriod": {
                "noaa": 11.2,
                "sg": 11.2
            },
            "swellDirection": {
                "icon": 80.96,
                "meteo": 59.65,
                "noaa": 215.94,
                "sg": 59.65
            },
            "swellHeight": {
                "icon": 1.88,
                "meteo": 0.77,
                "noaa": 0.19,
                "sg": 0.77
            },
            "swellPeriod": {
                "icon": 9.19,
                "meteo": 4.23,
                "noaa": 13.15,
                "sg": 4.23
            },
            "time": "2022-08-27T08:00:00+00:00",
            "waterTemperature": {
                "meto": 26.3,
                "noaa": 23.55,
                "sg": 26.3
            },
            "waveHeight": {
                "icon": 2.2,
                "meteo": 1.3,
                "noaa": 1.28,
                "sg": 1.3
            },
            "wavePeriod": {
                "icon": 7.97,
                "meteo": 4.66,
                "noaa": 5.95,
                "sg": 4.66
            },
            "windDirection": {
                "icon": 67.69,
                "noaa": 83.93,
                "sg": 67.69
            },
            "windSpeed": {
                "icon": 8.33,
                "noaa": 3.33,
                "sg": 8.33
            }
        },
        {
            "airTemperature": {
                "noaa": 23.12,
                "sg": 23.12
            },
            "cloudCover": {
                "noaa": 33.4,
                "sg": 33.4
            },
            "gust": {
                "noaa": 7.91,
                "sg": 7.91
            },
            "precipitation": {
                "noaa": 0.01,
                "sg": 0.01
            },
            "seaLevel": {
                "meto": 0.59,
                "sg": 0.59
            },
            "secondarySwellDirection": {
                "noaa": 174.88,
                "sg": 174.88
            },
            "secondarySwellHeight": {
                "noaa": 0.41,
                "sg": 0.41
            },
            "secondarySwellPeriod": {
                "noaa": 11.17,
                "sg": 11.17
            },
            "swellDirection": {
                "icon": 82.22,
                "meteo": 59.36,
                "noaa": 222.98,
                "sg": 59.36
            },
            "swellHeight": {
                "icon": 1.9,
                "meteo": 0.75,
                "noaa": 0.19,
                "sg": 0.75
            },
            "swellPeriod": {
                "icon": 9.11,
                "meteo": 4.29,
                "noaa": 13.48,
                "sg": 4.29
            },
            "time": "2022-08-27T09:00:00+00:00",
            "waterTemperature": {
                "meto": 26.3,
                "noaa": 23.19,
                "sg": 26.3
            },
            "waveHeight": {
                "icon": 2.2,
                "meteo": 1.29,
                "noaa": 1.26,
                "sg": 1.29
            },
            "wavePeriod": {
                "icon": 7.94,
                "meteo": 4.68,
                "noaa": 6.07,
                "sg": 4.68
            },
            "windDirection": {
                "icon": 69.32,
                "noaa": 85.63,
                "sg": 69.32
            },
            "windSpeed": {
                "icon": 8.28,
                "noaa": 3.52,
                "sg": 8.28
            }
        },
        {
            "airTemperature": {
                "noaa": 23.09,
                "sg": 23.09
            },
            "cloudCover": {
                "noaa": 47.97,
                "sg": 47.97
            },
            "gust": {
                "noaa": 7.78,
                "sg": 7.78
            },
            "precipitation": {
                "noaa": 0.08,
                "sg": 0.08
            },
            "seaLevel": {
                "meto": 0.59,
                "sg": 0.59
            },
            "secondarySwellDirection": {
                "noaa": 231.18,
                "sg": 231.18
            },
            "secondarySwellHeight": {
                "noaa": 0.37,
                "sg": 0.37
            },
            "secondarySwellPeriod": {
                "noaa": 11.12,
                "sg": 11.12
            },
            "swellDirection": {
                "icon": 82.47,
                "meteo": 59.51,
                "noaa": 206.01,
                "sg": 59.51
            },
            "swellHeight": {
                "icon": 1.93,
                "meteo": 0.72,
                "noaa": 0.19,
                "sg": 0.72
            },
            "swellPeriod": {
                "icon": 8.98,
                "meteo": 4.53,
                "noaa": 14,
                "sg": 4.53
            },
            "time": "2022-08-27T10:00:00+00:00",
            "waterTemperature": {
                "meto": 26.3,
                "noaa": 23.07,
                "sg": 26.3
            },
            "waveHeight": {
                "icon": 2.18,
                "meteo": 1.32,
                "noaa": 1.27,
                "sg": 1.32
            },
            "wavePeriod": {
                "icon": 7.98,
                "meteo": 4.67,
                "noaa": 6.14,
                "sg": 4.67
            },
            "windDirection": {
                "icon": 68.06,
                "noaa": 85.13,
                "sg": 68.06
            },
            "windSpeed": {
                "icon": 7.99,
                "noaa": 3.59,
                "sg": 7.99
            }
        },
        {
            "airTemperature": {
                "noaa": 23.05,
                "sg": 23.05
            },
            "cloudCover": {
                "noaa": 62.53,
                "sg": 62.53
            },
            "gust": {
                "noaa": 7.65,
                "sg": 7.65
            },
            "precipitation": {
                "noaa": 0.15,
                "sg": 0.15
            },
            "seaLevel": {
                "meto": 0.59,
                "sg": 0.59
            },
            "secondarySwellDirection": {
                "noaa": 287.48,
                "sg": 287.48
            },
            "secondarySwellHeight": {
                "noaa": 0.32,
                "sg": 0.32
            },
            "secondarySwellPeriod": {
                "noaa": 11.06,
                "sg": 11.06
            },
            "swellDirection": {
                "icon": 82.71,
                "meteo": 59.67,
                "noaa": 189.04,
                "sg": 59.67
            },
            "swellHeight": {
                "icon": 1.95,
                "meteo": 0.69,
                "noaa": 0.18,
                "sg": 0.69
            },
            "swellPeriod": {
                "icon": 8.85,
                "meteo": 4.78,
                "noaa": 14.51,
                "sg": 4.78
            },
            "time": "2022-08-27T11:00:00+00:00",
            "waterTemperature": {
                "meto": 26.3,
                "noaa": 22.96,
                "sg": 26.3
            },
            "waveHeight": {
                "icon": 2.16,
                "meteo": 1.36,
                "noaa": 1.27,
                "sg": 1.36
            },
            "wavePeriod": {
                "icon": 8.01,
                "meteo": 4.67,
                "noaa": 6.2,
                "sg": 4.67
            },
            "windDirection": {
                "icon": 66.79,
                "noaa": 84.64,
                "sg": 66.79
            },
            "windSpeed": {
                "icon": 7.7,
                "noaa": 3.65,
                "sg": 7.7
            }
        },
        {
            "airTemperature": {
                "noaa": 23.02,
                "sg": 23.02
            },
            "cloudCover": {
                "noaa": 77.1,
                "sg": 77.1
            },
            "gust": {
                "noaa": 7.53,
                "sg": 7.53
            },
            "precipitation": {
                "noaa": 0.22,
                "sg": 0.22
            },
            "seaLevel": {
                "meto": 0.59,
                "sg": 0.59
            },
            "secondarySwellDirection": {
                "noaa": 343.78,
                "sg": 343.78
            },
            "secondarySwellHeight": {
                "noaa": 0.28,
                "sg": 0.28
            },
            "secondarySwellPeriod": {
                "noaa": 11.01,
                "sg": 11.01
            },
            "swellDirection": {
                "icon": 82.96,
                "meteo": 59.82,
                "noaa": 172.07,
                "sg": 59.82
            },
            "swellHeight": {
                "icon": 1.98,
                "meteo": 0.66,
                "noaa": 0.18,
                "sg": 0.66
            },
            "swellPeriod": {
                "icon": 8.72,
                "meteo": 5.02,
                "noaa": 15.03,
                "sg": 5.02
            },
            "time": "2022-08-27T12:00:00+00:00",
            "waterTemperature": {
                "meto": 26.3,
                "noaa": 22.85,
                "sg": 26.3
            },
            "waveHeight": {
                "icon": 2.14,
                "meteo": 1.39,
                "noaa": 1.28,
                "sg": 1.39
            },
            "wavePeriod": {
                "icon": 8.05,
                "meteo": 4.66,
                "noaa": 6.27,
                "sg": 4.66
            },
            "windDirection": {
                "icon": 65.53,
                "noaa": 84.14,
                "sg": 65.53
            },
            "windSpeed": {
                "icon": 7.41,
                "noaa": 3.72,
                "sg": 7.41
            }
        },
        {
            "airTemperature": {
                "noaa": 22.73,
                "sg": 22.73
            },
            "cloudCover": {
                "noaa": 75.03,
                "sg": 75.03
            },
            "gust": {
                "noaa": 7.87,
                "sg": 7.87
            },
            "precipitation": {
                "noaa": 0.18,
                "sg": 0.18
            },
            "seaLevel": {
                "meto": 0.59,
                "sg": 0.59
            },
            "secondarySwellDirection": {
                "noaa": 345.47,
                "sg": 345.47
            },
            "secondarySwellHeight": {
                "noaa": 0.28,
                "sg": 0.28
            },
            "secondarySwellPeriod": {
                "noaa": 10.92,
                "sg": 10.92
            },
            "swellDirection": {
                "icon": 85.81,
                "meteo": 85.48,
                "noaa": 177.68,
                "sg": 85.48
            },
            "swellHeight": {
                "icon": 1.9,
                "meteo": 0.71,
                "noaa": 0.18,
                "sg": 0.71
            },
            "swellPeriod": {
                "icon": 8.98,
                "meteo": 5.22,
                "noaa": 14.85,
                "sg": 5.22
            },
            "time": "2022-08-27T13:00:00+00:00",
            "waterTemperature": {
                "meto": 26.3,
                "noaa": 22.55,
                "sg": 26.3
            },
            "waveHeight": {
                "icon": 2.17,
                "meteo": 1.46,
                "noaa": 1.29,
                "sg": 1.46
            },
            "wavePeriod": {
                "icon": 7.97,
                "meteo": 4.64,
                "noaa": 6.18,
                "sg": 4.64
            },
            "windDirection": {
                "icon": 65.9,
                "noaa": 84.5,
                "sg": 65.9
            },
            "windSpeed": {
                "icon": 8.09,
                "noaa": 3.62,
                "sg": 8.09
            }
        },
        {
            "airTemperature": {
                "noaa": 22.44,
                "sg": 22.44
            },
            "cloudCover": {
                "noaa": 72.97,
                "sg": 72.97
            },
            "gust": {
                "noaa": 8.21,
                "sg": 8.21
            },
            "precipitation": {
                "noaa": 0.14,
                "sg": 0.14
            },
            "seaLevel": {
                "meto": 0.59,
                "sg": 0.59
            },
            "secondarySwellDirection": {
                "noaa": 347.16,
                "sg": 347.16
            },
            "secondarySwellHeight": {
                "noaa": 0.28,
                "sg": 0.28
            },
            "secondarySwellPeriod": {
                "noaa": 10.83,
                "sg": 10.83
            },
            "swellDirection": {
                "icon": 88.65,
                "meteo": 111.14,
                "noaa": 183.3,
                "sg": 111.14
            },
            "swellHeight": {
                "icon": 1.82,
                "meteo": 0.75,
                "noaa": 0.18,
                "sg": 0.75
            },
            "swellPeriod": {
                "icon": 9.25,
                "meteo": 5.42,
                "noaa": 14.67,
                "sg": 5.42
            },
            "time": "2022-08-27T14:00:00+00:00",
            "waterTemperature": {
                "meto": 26.3,
                "noaa": 22.25,
                "sg": 26.3
            },
            "waveHeight": {
                "icon": 2.21,
                "meteo": 1.54,
                "noaa": 1.3,
                "sg": 1.54
            },
            "wavePeriod": {
                "icon": 7.89,
                "meteo": 4.63,
                "noaa": 6.1,
                "sg": 4.63
            },
            "windDirection": {
                "icon": 66.26,
                "noaa": 84.86,
                "sg": 66.26
            },
            "windSpeed": {
                "icon": 8.77,
                "noaa": 3.51,
                "sg": 8.77
            }
        },
        {
            "airTemperature": {
                "noaa": 22.15,
                "sg": 22.15
            },
            "cloudCover": {
                "noaa": 70.9,
                "sg": 70.9
            },
            "gust": {
                "noaa": 8.55,
                "sg": 8.55
            },
            "precipitation": {
                "noaa": 0.09,
                "sg": 0.09
            },
            "seaLevel": {
                "meto": 0.59,
                "sg": 0.59
            },
            "secondarySwellDirection": {
                "noaa": 348.85,
                "sg": 348.85
            },
            "secondarySwellHeight": {
                "noaa": 0.28,
                "sg": 0.28
            },
            "secondarySwellPeriod": {
                "noaa": 10.74,
                "sg": 10.74
            },
            "swellDirection": {
                "icon": 91.5,
                "meteo": 136.8,
                "noaa": 188.91,
                "sg": 136.8
            },
            "swellHeight": {
                "icon": 1.74,
                "meteo": 0.8,
                "noaa": 0.18,
                "sg": 0.8
            },
            "swellPeriod": {
                "icon": 9.51,
                "meteo": 5.62,
                "noaa": 14.49,
                "sg": 5.62
            },
            "time": "2022-08-27T15:00:00+00:00",
            "waterTemperature": {
                "meto": 26.3,
                "noaa": 21.95,
                "sg": 26.3
            },
            "waveHeight": {
                "icon": 2.24,
                "meteo": 1.61,
                "noaa": 1.31,
                "sg": 1.61
            },
            "wavePeriod": {
                "icon": 7.81,
                "meteo": 4.61,
                "noaa": 6.01,
                "sg": 4.61
            },
            "windDirection": {
                "icon": 66.63,
                "noaa": 85.22,
                "sg": 66.63
            },
            "windSpeed": {
                "icon": 9.45,
                "noaa": 3.41,
                "sg": 9.45
            }
        },
        {
            "airTemperature": {
                "noaa": 22.77,
                "sg": 22.77
            },
            "cloudCover": {
                "noaa": 64.63,
                "sg": 64.63
            },
            "gust": {
                "noaa": 8.35,
                "sg": 8.35
            },
            "precipitation": {
                "noaa": 0.08,
                "sg": 0.08
            },
            "seaLevel": {
                "meto": 0.59,
                "sg": 0.59
            },
            "secondarySwellDirection": {
                "noaa": 293.77,
                "sg": 293.77
            },
            "secondarySwellHeight": {
                "noaa": 0.28,
                "sg": 0.28
            },
            "secondarySwellPeriod": {
                "noaa": 11.18,
                "sg": 11.18
            },
            "swellDirection": {
                "icon": 90.18,
                "meteo": 123.11,
                "noaa": 199.64,
                "sg": 123.11
            },
            "swellHeight": {
                "icon": 1.76,
                "meteo": 0.69,
                "noaa": 0.18,
                "sg": 0.69
            },
            "swellPeriod": {
                "icon": 9.49,
                "meteo": 5.77,
                "noaa": 13.92,
                "sg": 5.77
            },
            "time": "2022-08-27T16:00:00+00:00",
            "waterTemperature": {
                "meto": 26.29,
                "noaa": 23.5,
                "sg": 26.29
            },
            "waveHeight": {
                "icon": 2.28,
                "meteo": 1.67,
                "noaa": 1.41,
                "sg": 1.67
            },
            "wavePeriod": {
                "icon": 7.78,
                "meteo": 4.65,
                "noaa": 6.22,
                "sg": 4.65
            },
            "windDirection": {
                "icon": 68.3,
                "noaa": 84.92,
                "sg": 68.3
            },
            "windSpeed": {
                "icon": 9.45,
                "noaa": 3.84,
                "sg": 9.45
            }
        },
        {
            "airTemperature": {
                "noaa": 23.39,
                "sg": 23.39
            },
            "cloudCover": {
                "noaa": 58.37,
                "sg": 58.37
            },
            "gust": {
                "noaa": 8.15,
                "sg": 8.15
            },
            "precipitation": {
                "noaa": 0.07,
                "sg": 0.07
            },
            "seaLevel": {
                "meto": 0.59,
                "sg": 0.59
            },
            "secondarySwellDirection": {
                "noaa": 238.7,
                "sg": 238.7
            },
            "secondarySwellHeight": {
                "noaa": 0.27,
                "sg": 0.27
            },
            "secondarySwellPeriod": {
                "noaa": 11.63,
                "sg": 11.63
            },
            "swellDirection": {
                "icon": 88.86,
                "meteo": 109.41,
                "noaa": 210.38,
                "sg": 109.41
            },
            "swellHeight": {
                "icon": 1.77,
                "meteo": 0.57,
                "noaa": 0.17,
                "sg": 0.57
            },
            "swellPeriod": {
                "icon": 9.47,
                "meteo": 5.92,
                "noaa": 13.35,
                "sg": 5.92
            },
            "time": "2022-08-27T17:00:00+00:00",
            "waterTemperature": {
                "meto": 26.29,
                "noaa": 25.04,
                "sg": 26.29
            },
            "waveHeight": {
                "icon": 2.31,
                "meteo": 1.73,
                "noaa": 1.5,
                "sg": 1.73
            },
            "wavePeriod": {
                "icon": 7.74,
                "meteo": 4.69,
                "noaa": 6.42,
                "sg": 4.69
            },
            "windDirection": {
                "icon": 69.98,
                "noaa": 84.61,
                "sg": 69.98
            },
            "windSpeed": {
                "icon": 9.46,
                "noaa": 4.27,
                "sg": 9.46
            }
        },
        {
            "airTemperature": {
                "noaa": 24.01,
                "sg": 24.01
            },
            "cloudCover": {
                "noaa": 52.1,
                "sg": 52.1
            },
            "gust": {
                "noaa": 7.94,
                "sg": 7.94
            },
            "precipitation": {
                "noaa": 0.05,
                "sg": 0.05
            },
            "seaLevel": {
                "meto": 0.59,
                "sg": 0.59
            },
            "secondarySwellDirection": {
                "noaa": 183.62,
                "sg": 183.62
            },
            "secondarySwellHeight": {
                "noaa": 0.27,
                "sg": 0.27
            },
            "secondarySwellPeriod": {
                "noaa": 12.07,
                "sg": 12.07
            },
            "swellDirection": {
                "icon": 87.54,
                "meteo": 95.72,
                "noaa": 221.11,
                "sg": 95.72
            },
            "swellHeight": {
                "icon": 1.79,
                "meteo": 0.46,
                "noaa": 0.17,
                "sg": 0.46
            },
            "swellPeriod": {
                "icon": 9.45,
                "meteo": 6.07,
                "noaa": 12.78,
                "sg": 6.07
            },
            "time": "2022-08-27T18:00:00+00:00",
            "waterTemperature": {
                "meto": 26.29,
                "noaa": 26.59,
                "sg": 26.29
            },
            "waveHeight": {
                "icon": 2.35,
                "meteo": 1.79,
                "noaa": 1.6,
                "sg": 1.79
            },
            "wavePeriod": {
                "icon": 7.71,
                "meteo": 4.73,
                "noaa": 6.63,
                "sg": 4.73
            },
            "windDirection": {
                "icon": 71.65,
                "noaa": 84.31,
                "sg": 71.65
            },
            "windSpeed": {
                "icon": 9.46,
                "noaa": 4.7,
                "sg": 9.46
            }
        },
        {
            "airTemperature": {
                "noaa": 24.88,
                "sg": 24.88
            },
            "cloudCover": {
                "noaa": 35.67,
                "sg": 35.67
            },
            "gust": {
                "noaa": 8.3,
                "sg": 8.3
            },
            "precipitation": {
                "noaa": 0.04,
                "sg": 0.04
            },
            "seaLevel": {
                "meto": 0.59,
                "sg": 0.59
            },
            "secondarySwellDirection": {
                "noaa": 185.14,
                "sg": 185.14
            },
            "secondarySwellHeight": {
                "noaa": 0.26,
                "sg": 0.26
            },
            "secondarySwellPeriod": {
                "noaa": 12.05,
                "sg": 12.05
            },
            "swellDirection": {
                "icon": 89.36,
                "meteo": 85.12,
                "noaa": 205.03,
                "sg": 85.12
            },
            "swellHeight": {
                "icon": 1.76,
                "meteo": 0.62,
                "noaa": 0.17,
                "sg": 0.62
            },
            "swellPeriod": {
                "icon": 9.52,
                "meteo": 5.88,
                "noaa": 12.77,
                "sg": 5.88
            },
            "time": "2022-08-27T19:00:00+00:00",
            "waterTemperature": {
                "meto": 26.29,
                "noaa": 29.61,
                "sg": 26.29
            },
            "waveHeight": {
                "icon": 2.36,
                "meteo": 1.76,
                "noaa": 1.6,
                "sg": 1.76
            },
            "wavePeriod": {
                "icon": 7.69,
                "meteo": 4.78,
                "noaa": 6.65,
                "sg": 4.78
            },
            "windDirection": {
                "icon": 71.01,
                "noaa": 84.04,
                "sg": 71.01
            },
            "windSpeed": {
                "icon": 9.6,
                "noaa": 5.04,
                "sg": 9.6
            }
        },
        {
            "airTemperature": {
                "noaa": 25.76,
                "sg": 25.76
            },
            "cloudCover": {
                "noaa": 19.23,
                "sg": 19.23
            },
            "gust": {
                "noaa": 8.65,
                "sg": 8.65
            },
            "precipitation": {
                "noaa": 0.02,
                "sg": 0.02
            },
            "seaLevel": {
                "meto": 0.59,
                "sg": 0.59
            },
            "secondarySwellDirection": {
                "noaa": 186.66,
                "sg": 186.66
            },
            "secondarySwellHeight": {
                "noaa": 0.25,
                "sg": 0.25
            },
            "secondarySwellPeriod": {
                "noaa": 12.04,
                "sg": 12.04
            },
            "swellDirection": {
                "icon": 91.19,
                "meteo": 74.52,
                "noaa": 188.96,
                "sg": 74.52
            },
            "swellHeight": {
                "icon": 1.72,
                "meteo": 0.78,
                "noaa": 0.17,
                "sg": 0.78
            },
            "swellPeriod": {
                "icon": 9.6,
                "meteo": 5.69,
                "noaa": 12.77,
                "sg": 5.69
            },
            "time": "2022-08-27T20:00:00+00:00",
            "waterTemperature": {
                "meto": 26.29,
                "noaa": 32.63,
                "sg": 26.29
            },
            "waveHeight": {
                "icon": 2.37,
                "meteo": 1.73,
                "noaa": 1.6,
                "sg": 1.73
            },
            "wavePeriod": {
                "icon": 7.68,
                "meteo": 4.82,
                "noaa": 6.66,
                "sg": 4.82
            },
            "windDirection": {
                "icon": 70.38,
                "noaa": 83.77,
                "sg": 70.38
            },
            "windSpeed": {
                "icon": 9.75,
                "noaa": 5.37,
                "sg": 9.75
            }
        },
        {
            "airTemperature": {
                "noaa": 26.63,
                "sg": 26.63
            },
            "cloudCover": {
                "noaa": 2.8,
                "sg": 2.8
            },
            "gust": {
                "noaa": 9.01,
                "sg": 9.01
            },
            "precipitation": {
                "noaa": 0,
                "sg": 0
            },
            "seaLevel": {
                "meto": 0.6,
                "sg": 0.6
            },
            "secondarySwellDirection": {
                "noaa": 188.18,
                "sg": 188.18
            },
            "secondarySwellHeight": {
                "noaa": 0.24,
                "sg": 0.24
            },
            "secondarySwellPeriod": {
                "noaa": 12.02,
                "sg": 12.02
            },
            "swellDirection": {
                "icon": 93.01,
                "meteo": 63.92,
                "noaa": 172.88,
                "sg": 63.92
            },
            "swellHeight": {
                "icon": 1.69,
                "meteo": 0.94,
                "noaa": 0.17,
                "sg": 0.94
            },
            "swellPeriod": {
                "icon": 9.67,
                "meteo": 5.5,
                "noaa": 12.76,
                "sg": 5.5
            },
            "time": "2022-08-27T21:00:00+00:00",
            "waterTemperature": {
                "meto": 26.29,
                "noaa": 35.65,
                "sg": 26.29
            },
            "waveHeight": {
                "icon": 2.38,
                "meteo": 1.7,
                "noaa": 1.6,
                "sg": 1.7
            },
            "wavePeriod": {
                "icon": 7.66,
                "meteo": 4.87,
                "noaa": 6.68,
                "sg": 4.87
            },
            "windDirection": {
                "icon": 69.74,
                "noaa": 83.5,
                "sg": 69.74
            },
            "windSpeed": {
                "icon": 9.89,
                "noaa": 5.71,
                "sg": 9.89
            }
        },
        {
            "airTemperature": {
                "noaa": 26.84,
                "sg": 26.84
            },
            "cloudCover": {
                "noaa": 1.9,
                "sg": 1.9
            },
            "gust": {
                "noaa": 8.38,
                "sg": 8.38
            },
            "precipitation": {
                "noaa": 0.01,
                "sg": 0.01
            },
            "seaLevel": {
                "meto": 0.6,
                "sg": 0.6
            },
            "secondarySwellDirection": {
                "noaa": 188.14,
                "sg": 188.14
            },
            "secondarySwellHeight": {
                "noaa": 0.23,
                "sg": 0.23
            },
            "secondarySwellPeriod": {
                "noaa": 11.99,
                "sg": 11.99
            },
            "swellDirection": {
                "icon": 93.26,
                "meteo": 94.38,
                "noaa": 172.33,
                "sg": 94.38
            },
            "swellHeight": {
                "icon": 1.71,
                "meteo": 0.85,
                "noaa": 0.17,
                "sg": 0.85
            },
            "swellPeriod": {
                "icon": 9.58,
                "meteo": 5.81,
                "noaa": 12.73,
                "sg": 5.81
            },
            "time": "2022-08-27T22:00:00+00:00",
            "waterTemperature": {
                "meto": 26.29,
                "noaa": 36.35,
                "sg": 26.29
            },
            "waveHeight": {
                "icon": 2.37,
                "meteo": 1.73,
                "noaa": 1.59,
                "sg": 1.73
            },
            "wavePeriod": {
                "icon": 7.65,
                "meteo": 4.8,
                "noaa": 6.72,
                "sg": 4.8
            },
            "windDirection": {
                "icon": 67.74,
                "noaa": 80.73,
                "sg": 67.74
            },
            "windSpeed": {
                "icon": 9.86,
                "noaa": 5.44,
                "sg": 9.86
            }
        },
        {
            "airTemperature": {
                "noaa": 27.05,
                "sg": 27.05
            },
            "cloudCover": {
                "noaa": 1,
                "sg": 1
            },
            "gust": {
                "noaa": 7.74,
                "sg": 7.74
            },
            "precipitation": {
                "noaa": 0.02,
                "sg": 0.02
            },
            "seaLevel": {
                "meto": 0.6,
                "sg": 0.6
            },
            "secondarySwellDirection": {
                "noaa": 188.09,
                "sg": 188.09
            },
            "secondarySwellHeight": {
                "noaa": 0.23,
                "sg": 0.23
            },
            "secondarySwellPeriod": {
                "noaa": 11.96,
                "sg": 11.96
            },
            "swellDirection": {
                "icon": 93.5,
                "meteo": 124.84,
                "noaa": 171.78,
                "sg": 124.84
            },
            "swellHeight": {
                "icon": 1.73,
                "meteo": 0.75,
                "noaa": 0.16,
                "sg": 0.75
            },
            "swellPeriod": {
                "icon": 9.49,
                "meteo": 6.13,
                "noaa": 12.71,
                "sg": 6.13
            },
            "time": "2022-08-27T23:00:00+00:00",
            "waterTemperature": {
                "meto": 26.29,
                "noaa": 37.05,
                "sg": 26.29
            },
            "waveHeight": {
                "icon": 2.36,
                "meteo": 1.75,
                "noaa": 1.57,
                "sg": 1.75
            },
            "wavePeriod": {
                "icon": 7.65,
                "meteo": 4.74,
                "noaa": 6.76,
                "sg": 4.74
            },
            "windDirection": {
                "icon": 65.74,
                "noaa": 77.96,
                "sg": 65.74
            },
            "windSpeed": {
                "icon": 9.83,
                "noaa": 5.16,
                "sg": 9.83
            }
        },
        {
            "airTemperature": {
                "noaa": 27.25,
                "sg": 27.25
            },
            "cloudCover": {
                "noaa": 0.1,
                "sg": 0.1
            },
            "gust": {
                "noaa": 7.11,
                "sg": 7.11
            },
            "precipitation": {
                "noaa": 0.02,
                "sg": 0.02
            },
            "seaLevel": {
                "meto": 0.6,
                "sg": 0.6
            },
            "secondarySwellDirection": {
                "noaa": 188.05,
                "sg": 188.05
            },
            "secondarySwellHeight": {
                "noaa": 0.22,
                "sg": 0.22
            },
            "secondarySwellPeriod": {
                "noaa": 11.93,
                "sg": 11.93
            },
            "swellDirection": {
                "icon": 93.75,
                "meteo": 155.3,
                "noaa": 171.23,
                "sg": 155.3
            },
            "swellHeight": {
                "icon": 1.75,
                "meteo": 0.66,
                "noaa": 0.16,
                "sg": 0.66
            },
            "swellPeriod": {
                "icon": 9.4,
                "meteo": 6.44,
                "noaa": 12.68,
                "sg": 6.44
            },
            "time": "2022-08-28T00:00:00+00:00",
            "waterTemperature": {
                "meto": 26.48,
                "noaa": 37.75,
                "sg": 26.48
            },
            "waveHeight": {
                "icon": 2.35,
                "meteo": 1.78,
                "noaa": 1.56,
                "sg": 1.78
            },
            "wavePeriod": {
                "icon": 7.64,
                "meteo": 4.67,
                "noaa": 6.8,
                "sg": 4.67
            },
            "windDirection": {
                "icon": 63.74,
                "noaa": 75.19,
                "sg": 63.74
            },
            "windSpeed": {
                "icon": 9.8,
                "noaa": 4.89,
                "sg": 9.8
            }
        },
        {
            "airTemperature": {
                "noaa": 26.71,
                "sg": 26.71
            },
            "cloudCover": {
                "noaa": 4.87,
                "sg": 4.87
            },
            "gust": {
                "noaa": 6.98,
                "sg": 6.98
            },
            "precipitation": {
                "noaa": 0.02,
                "sg": 0.02
            },
            "seaLevel": {
                "meto": 0.6,
                "sg": 0.6
            },
            "secondarySwellDirection": {
                "noaa": 186.86,
                "sg": 186.86
            },
            "secondarySwellHeight": {
                "noaa": 0.22,
                "sg": 0.22
            },
            "secondarySwellPeriod": {
                "noaa": 11.87,
                "sg": 11.87
            },
            "swellDirection": {
                "icon": 93.94,
                "meteo": 148.8,
                "noaa": 185.14,
                "sg": 148.8
            },
            "swellHeight": {
                "icon": 1.73,
                "meteo": 0.65,
                "noaa": 0.16,
                "sg": 0.65
            },
            "swellPeriod": {
                "icon": 9.4,
                "meteo": 6.35,
                "noaa": 12.63,
                "sg": 6.35
            },
            "time": "2022-08-28T01:00:00+00:00",
            "waterTemperature": {
                "meto": 26.46,
                "noaa": 35.46,
                "sg": 26.46
            },
            "waveHeight": {
                "icon": 2.35,
                "meteo": 1.8,
                "noaa": 1.58,
                "sg": 1.8
            },
            "wavePeriod": {
                "icon": 7.6,
                "meteo": 4.68,
                "noaa": 6.63,
                "sg": 4.68
            },
            "windDirection": {
                "icon": 63.51,
                "noaa": 76.54,
                "sg": 63.51
            },
            "windSpeed": {
                "icon": 9.86,
                "noaa": 4.75,
                "sg": 9.86
            }
        },
        {
            "airTemperature": {
                "noaa": 26.16,
                "sg": 26.16
            },
            "cloudCover": {
                "noaa": 9.63,
                "sg": 9.63
            },
            "gust": {
                "noaa": 6.85,
                "sg": 6.85
            },
            "precipitation": {
                "noaa": 0.03,
                "sg": 0.03
            },
            "seaLevel": {
                "meto": 0.6,
                "sg": 0.6
            },
            "secondarySwellDirection": {
                "noaa": 185.66,
                "sg": 185.66
            },
            "secondarySwellHeight": {
                "noaa": 0.21,
                "sg": 0.21
            },
            "secondarySwellPeriod": {
                "noaa": 11.81,
                "sg": 11.81
            },
            "swellDirection": {
                "icon": 94.13,
                "meteo": 142.31,
                "noaa": 199.05,
                "sg": 142.31
            },
            "swellHeight": {
                "icon": 1.71,
                "meteo": 0.64,
                "noaa": 0.15,
                "sg": 0.64
            },
            "swellPeriod": {
                "icon": 9.41,
                "meteo": 6.27,
                "noaa": 12.58,
                "sg": 6.27
            },
            "time": "2022-08-28T02:00:00+00:00",
            "waterTemperature": {
                "meto": 26.46,
                "noaa": 33.16,
                "sg": 26.46
            },
            "waveHeight": {
                "icon": 2.34,
                "meteo": 1.81,
                "noaa": 1.59,
                "sg": 1.81
            },
            "wavePeriod": {
                "icon": 7.57,
                "meteo": 4.7,
                "noaa": 6.46,
                "sg": 4.7
            },
            "windDirection": {
                "icon": 63.27,
                "noaa": 77.88,
                "sg": 63.27
            },
            "windSpeed": {
                "icon": 9.93,
                "noaa": 4.6,
                "sg": 9.93
            }
        }
    ],
    "meta": {
        "cost": 1,
        "dailyQuota": 1000,
        "end": "2022-08-28 02:00",
        "lat": 21.2724,
        "lng": -157.8285,
        "params": [
            "airTemperature",
            "cloudCover",
            "gust",
            "precipitation",
            "swellDirection",
            "swellHeight",
            "swellPeriod",
            "secondarySwellPeriod",
            "secondarySwellDirection",
            "secondarySwellHeight",
            "waterTemperature",
            "wavePeriod",
            "waveHeight",
            "windDirection",
            "windSpeed",
            "seaLevel"
        ],
        "requestCount": 48,
        "start": "2022-08-27 02:00"
    }
}

const utcYear = (new Date()).getUTCFullYear()
const utcMonth = (new Date()).getUTCMonth() + 1 //add 1 bc months are 0-indexed
const utcDay = (new Date()).getUTCDate()
const utcHour = (new Date()).getUTCHours()
console.log(utcHour, 'hour')
console.log(utcMonth, 'month')

function addZeroHour() {
    return utcHour < 10 ? 0 : ""
}
function addZeroDay() {
    return utcDay < 10 ? 0 : ""
}
function addZeroMonth() {
    return utcMonth < 10 ? 0 : ""
}

console.log(`${addZeroHour()}${utcHour}`, "hour")
console.log(`${addZeroDay()}${utcDay}`, "day of month")
console.log(`${addZeroMonth()}${utcMonth}`, "month")

const utcDate = `${utcYear}-${addZeroMonth()}${utcMonth}-${utcDay}T${addZeroHour()}${utcHour}:00:00+00:00` 

console.log(utcDate, "utcDate")

console.log(test.hours[0].time === utcDate, "array element matches formatted local time in utc")