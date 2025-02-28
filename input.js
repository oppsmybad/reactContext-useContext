// Импорт необходимых модулей
import { useContext } from "react";
import dataContext from "./context";
import "./bootstrap.min.css";

const InputComponent = () => {
    // Получаем данные из контекста
    const context = useContext(dataContext);

    return (
        <input
            value={context.mail} // Значение из контекста
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onFocus={context.forceChangeMail} // Вызов функции при фокусе
        />
    );
};

export default InputComponent;
