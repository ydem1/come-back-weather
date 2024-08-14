import React, { FC } from "react";
import { Paper, Typography } from "@mui/material";

export const AboutInfo: FC = () => (
  <section className="container">
    <div className="md:px-10 gl:px-15 xl:px-25 ">
      <h2 className="my-5">Тестове завдання від ComeBack</h2>

      <Paper className="p-5 mb-1">
        <Typography variant="h5" component="h2" gutterBottom>
          Тестове завдання для React Dev
        </Typography>
        <Typography variant="body1" paragraph>
          Задача: Реалізувати SPA, яке показує погоду в обраних містах.
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          Тех. завдання:
        </Typography>
        <ul className="flex flex-col gap-2">
          <li>
            Необхідно вивести список міст &quot;картками&quot;. Картка повинна
            містити наступний функціонал:
          </li>
          <li>Коротка інформація про погоду у місті</li>
          <li>
            При натисканні на картку вивести детальну інформацію/перехід на
            сторінку з детальною інформацією
          </li>
          <li>
            На кожній картці міста має бути кнопка: оновити дані про погоду
            зараз. При її натисканні має відбуватися оновлення погоди даного
            міста
          </li>
          <li>
            Має бути можливість додавати/видаляти міста. При додаванні нового
            міста відбувається запит на отримання поточної погоди та виведення
            його на екран.
          </li>
          <li>
            Дані зберігати локально в LocalStorage. При перезавантаженні
            сторінки повинен зберігатися список міст, які раніше були виведені
            користувачем, а дані про погоду повинні бути оновлені.
          </li>
        </ul>
        <Typography variant="h6" component="h3" gutterBottom>
          Буде плюсом:
        </Typography>
        <ul>
          <li>
            На сторінці з детальним поданням реалізувати положення блоку з
            температурою на основі величини значення у вигляді графіку. Для
            цього робити додатковий запит на отримання погодинного прогнозу на
            поточний день.
          </li>
        </ul>
        <Typography variant="h6" component="h3" gutterBottom>
          Вимоги:
        </Typography>
        <ul>
          <li>
            Застосувати Weather API:{" "}
            <a
              href="https://openweathermap.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://openweathermap.org/
            </a>
          </li>
          <li>
            Застосувати React, Typescript, Redux + Redux-Thunk (Рекомендується
            використовувати Redux Toolkit), React-router
          </li>
          <li>
            Застосувати препроцессор CSS. Зробити мобільну версію.
            Рекомендується використовувати SCSS. Для прискорення роботи можна
            використати UI бібліотеки на кшталт Material UI
          </li>
          <li>
            Код повинен бути чистим, зі збереженням форматування. Рекомендується
            використання ESLint/Prettie
          </li>
          <li>
            Покрити тестами основні компоненти за допомогою Jest +
            (react-testing-library/enzyme)
          </li>
          <li>
            Написання компонентів у функціональному стилі із застосуванням хуків
          </li>
        </ul>
      </Paper>
    </div>
  </section>
);
