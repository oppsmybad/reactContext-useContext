// Импорт базовых React-модулей
import { useState } from "react";
import "./App.css";
import Form from "./form";
import dataContext from "./context";
import "./bootstrap.min.css";

// Деструктуризация объекта контекста для получения Provider
const { Provider } = dataContext;

function App() {
    // Создание состояния с начальными значениями
    const [data, setData] = useState({
        mail: "name@example.com", // Электронная почта
        text: "some text", // Произвольный текст
        forceChangeMail: forceChangeMail, // Функция для принудительного изменения почты
    });

    // Функция для изменения почты в состоянии
    function forceChangeMail() {
        setData({ ...data, mail: "test@gmail.com" });
    }

    return (
        // Обеспечиваем доступ к данным через Context Provider
        <Provider value={data}>
            {/* Рендер формы с передачей текста через props */}
            <Form text={data.text} />

            {/* Кнопка для демонстрации обновления состояния */}
            <button
                style={{ margin: "20px auto", display: "block" }}
                className="w-20 p-3"
                onClick={() =>
                    // Полное обновление состояния с новыми значениями
                    setData({
                        mail: "second@example.com",
                        text: "another text",
                        forceChangeMail: forceChangeMail,
                    })
                }
            >
                Click me
            </button>
        </Provider>
    );
}

export default App;
