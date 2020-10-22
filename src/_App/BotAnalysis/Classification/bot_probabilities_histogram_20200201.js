

// from: numpy https://numpy.org/doc/stable/reference/generated/numpy.histogram.html
// to: victory charts https://formidable.com/open-source/victory/docs/victory-histogram/
// with love

//const dailyHistogram = {
//    "date": "2020-02-01",
//    "hist": [572, 20, 20, 12, 10, 4, 9, 8, 11, 10, 6, 9, 4, 5, 6, 6, 7, 7, 9, 3, 6, 10, 4, 7, 5, 8, 5, 6, 3, 3, 10, 11, 8, 14, 5, 10, 11, 11, 15, 12, 7, 10, 10, 13, 22, 18, 31, 52, 56, 435, 316055, 2839, 1698, 1183, 874, 759, 654, 578, 485, 477, 397, 357, 311, 354, 290, 237, 285, 236, 248, 245, 209, 223, 218, 195, 204, 190, 142, 178, 138, 144, 158, 151, 161, 171, 142, 147, 157, 154, 149, 133, 146, 138, 145, 186, 169, 188, 203, 204, 263, 552],
//    "bin_edges": [0.0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1.0]
//}

//const dailyHistogramExcludingDefaultScores = {
//    "date": "2020-02-01",
//    "hist": [
//        572, 20, 20, 12, 10, 4, 9, 8, 11, 10, 6, 9, 4, 5, 6, 6, 7, 7, 9, 3, 6, 10, 4, 7, 5, 8, 5, 6, 3, 3, 10, 11, 8, 14, 5, 10, 11, 11, 15, 12, 7, 10, 10, 13, 22, 18, 31, 52, 56, 435,
//        //316055,
//        2839, 1698, 1183, 874, 759, 654, 578, 485, 477, 397, 357, 311, 354, 290, 237, 285, 236, 248, 245, 209, 223, 218, 195, 204, 190, 142, 178, 138, 144, 158, 151, 161, 171, 142, 147, 157, 154, 149, 133, 146, 138, 145, 186, 169, 188, 203, 204, 263, 552
//    ],
//    "bin_edges": [
//        0.0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49,
//        //0.5,
//        0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1.0
//    ]
//}

//const barData = [
//    {"0.0": 634}, {"0.05": 42}, {"0.1": 30}, {"0.15": 32}, {"0.2": 32}, {"0.25": 25}, {"0.3": 48}, {"0.35": 59}, {"0.4": 62}, {"0.45": 592},
//    //{"0.5": 322649},
//    {"0.55": 2953}, {"0.6": 1709}, {"0.65": 1251}, {"0.7": 1049}, {"0.75": 792}, {"0.8": 783}, {"0.85": 740}, {"0.9": 784}, {"0.95": 1410}
//]

const bars = [
    {"category": 0.0, "frequency": 634}, {"category": 0.05, "frequency": 42}, {"category": 0.1, "frequency": 30}, {"category": 0.15, "frequency": 32}, {"category": 0.2, "frequency": 32}, {"category": 0.25, "frequency": 25}, {"category": 0.3, "frequency": 48}, {"category": 0.35, "frequency": 59}, {"category": 0.4, "frequency": 62}, {"category": 0.45, "frequency": 592},
    //{"category": 0.5, "frequency": 322649},
    {"category": 0.5, "frequency": null}, // leave a space
    {"category": 0.55, "frequency": 2953}, {"category": 0.6, "frequency": 1709}, {"category": 0.65, "frequency": 1251}, {"category": 0.7, "frequency": 1049}, {"category": 0.75, "frequency": 792}, {"category": 0.8, "frequency": 783}, {"category": 0.85, "frequency": 740}, {"category": 0.9, "frequency": 784}, {"category": 0.95, "frequency": 1410}
]

export default bars
