// Импорт необходимых компонентов и стилей
import { Container } from "react-bootstrap"; // Контейнер из Bootstrap для адаптивной верстки
import InputComponent from "./input"; // Кастомный компонент ввода
import "./bootstrap.min.css";

const Form = (props) => {
    // Отладочный вывод для отслеживания рендеров
    console.log("render");

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mt-3"
                    >
                        Email address
                    </label>

                    {/* Кастомный компонент ввода (работает через контекст) */}
                    <InputComponent />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                    >
                        Example textarea
                    </label>

                    {/* Текстовая область с управлением через props */}
                    <textarea
                        value={props.text} // Значение получает из родительского компонента
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </form>
        </Container>
    );
};

export default Form;
