class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.timerId = null;
    }
  
    start() {
      if (this.timerId) {
        console.warn('Таймер уже запущен');
        return true;
      }
  
      const checkClock = (call) => {
        call.time <= new Date().getTime() && call.callback();
      };
  
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(checkClock);
      }, 1000);
  
      console.log('Запуск таймера');
    }
  
    stop() {
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
        console.log('Таймер остановлен');
        return true;
      }
    }
  
    printAlarms() {
      this.alarmCollection.forEach((item) =>
        console.log(`Будильник под №${item.id} поставлен на ${item._timeString}`),
      );
      console.log(`Количество активных будильников: ${this.alarmCollection.length}`);
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  
    addClock(setTime, callback, alarmId) {
      if (!alarmId) {
        throw new Error('Будильник не добавлен! Не передан идентификатор.');
      }
      if (this.alarmCollection.find((item) => item.id === alarmId)) {
        console.error(
          `Будильник не добавлен! Будильник с id = ${alarmId} уже существует, измените значение`,
        );
        return false;
      }
      try {
        this.alarmCollection.push(new Alarm(setTime, callback, alarmId));
      } catch (err) {
        console.error(err.message);
      }
    }
  
    removeClock(alarmId) {
      let length = this.alarmCollection.length;
      this.alarmCollection = this.alarmCollection.filter((item) => item.id !== alarmId);
      return length > this.alarmCollection.length;
    }
  
    getCurrentFormattedTime() {
      const currentDate = new Date();
      const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
      const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
      return `${hours}:${minutes}`;
    }
  }
  
  class Alarm {
    constructor(setTime, callback, alarmId) {
      let time = new Date().setHours(setTime.split(':')[0], setTime.split(':')[1], 0, 0);
      this.time = time;
      this.callback = callback;
      this.id = alarmId;
      this._timeString = setTime;
    }
  }

  const testCase = () => {
    const phoneClock = new AlarmClock();
  
    const t1 = new Date().toLocaleTimeString().split(':').splice(0, 2).join(':');
    const t2 = new Date(new Date().setMinutes(new Date().getMinutes() + 1)).toLocaleTimeString().split(':').splice(0, 2).join(':');
    const t3 = new Date(new Date().setMinutes(new Date().getMinutes() + 2)).toLocaleTimeString().split(':').splice(0, 2).join(':');
  
    phoneClock.addClock(t1, () => console.log(`Время ${t1} Это ПЕРВОЕ предупреждение!`), 1);
  
    phoneClock.addClock(
      t2, () => {
        console.log(`Время ${t2} Не хочешь вставать? Мы сейчас продадим все твои биткоины!`);
        console.log('ВТОРОЙ будильник удален: ', phoneClock.removeClock(2));
      }, 2,
    );
  
    phoneClock.addClock(
      t3, () => {
        console.log(`Время ${t3} Всё. Это конец. Нам больше не о чем разговаривать.`);
        phoneClock.clearAlarms();
      }, 3,
    );
    
    try {
      phoneClock.addClock('22:00', () => console.log('Вставай. Пора смотреть "Спокойной ночи малыши"'));
    } catch (err) {
      console.error(err.message);
    }
    phoneClock.addClock(t1, () => console.log('...'), 1);
    console.log(phoneClock);
    phoneClock.printAlarms();
    phoneClock.start();
    phoneClock.start();
  };
  
  testCase();

