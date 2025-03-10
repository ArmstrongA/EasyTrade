// export const fetchStock = (ticker) => (
//   $.ajax({
//     url: `api/stocks/${ticker}`
//   })
// );

export const fetchStock = (ticker) => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/company/?token=${window.iexKey}`
  })
);

export const fetchStocks = () => (
  $.ajax({
    url: 'api/stocks'
  })
);

export const fetchStockDailyData = ticker => (
  $.ajax({
    method: 'get',
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/5y/?token=${window.iexKey}`
  })
);

export const fetchStockIntradayData = ticker => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/intraday-prices/?token=${window.iexKey}`
  })
);

export const fetchStockNews = ticker => (
  $.ajax({
    url: `https://newsapi.org/v2/everything?q=${ticker}&sortBy=publishedAt&apiKey=${window.newsKey}&language=en&domains=wsj.com,nytimes.com,seekingalpha.com,yahoo.com`
  })
);

export const fetchStockInfo = ticker => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/aapl/stats?token=${window.iexKey}`
  })
);

export const fetchStockInfo2 = ticker => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/aapl/batch?types=quote&token=${window.iexKey}`
  })
);
