/**
 * @param func {function}
 * @param timeout {number}
 * @return {function}
 */
const debounce = function (func, timeout) {
    let isDebounce = false; // Флаг (выполнять переданную функцию или нет);

    return function() { // Создаем и возвращаем функцию обертку;
        if (isDebounce) return; // Если флаг = true - завершаем выполнение функции-обертки;

        func.apply(this, arguments); // Иначе выполняем переданную функцию;
        isDebounce = true;  // Устанавливаем флаг в true (переданную функцию снова не будет выполняться);

        setTimeout(() => isDebounce = false, timeout); // Запускаем таймер с переданным таймаутом который устанавливает флаг в false;
    };
}

export default debounce;
