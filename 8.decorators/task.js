function cachingDecoratorNew(func) {
  let cache = [];
  return function (...args) {
    const hash = args.join();
    const cacheItem = cache.find((item) => item.hash === hash);
    if (cacheItem) {
      return `Из кэша: ${cacheItem.result}`;
    }
    const result = func.call(this, ...args);
    if (cache.length == 5) {
      cache = cache.slice(1);
    }
    cache.push({ hash, result });
    return `Вычисляем: ${result}`;
  };
}

function debounceDecoratorNew(func, ms) {
  let timerId;
  let isDelayed = false;
  return function (...args) {
    if (!isDelayed) {
      func.call(this, ...args);
      isDelayed = true;
    }
    timerId && clearTimeout(timerId);
    timerId = setTimeout(() => {
      isDelayed && func.call(this, ...args);
      isDelayed = false;
    }, ms);
  };
}

function debounceDecorator2(func, ms) {
  let timerId;
  let isDelayed = false;
  wrapper.count = 0;
  function wrapper(...args) {
    if (!isDelayed) {
      func.call(this, ...args);
      isDelayed = true;
      wrapper.count += 1;
    }
    timerId && clearTimeout(timerId);
    timerId = setTimeout(() => {
      isDelayed && func.call(this, ...args);
      isDelayed = false;
      wrapper.count += 1;
    }, ms);
  }
  return wrapper;
}