

function formatNumber(num) {
    // formats 11300123 as "11,300,123"
    return parseInt(num).toLocaleString()
}

function formatBigNumber(num) {
    // formats 11300123 as "11.3K"
    // h/t: https://stackoverflow.com/a/9461657
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
}

function formatPct(num) {
    // formats 0.3444444 as "34.4%"
    return (num * 100.0).toFixed(1) + "%"
}

export {formatPct, formatBigNumber, formatNumber}
