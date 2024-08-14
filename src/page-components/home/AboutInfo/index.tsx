import React, { FC } from "react";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AboutInfo: FC = () => {
  const Bullet = styled("li")(({ theme }) => ({
    marginBottom: theme.spacing(1),
  }));

  return (
    <section className="container">
      <div className="mx-25">
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
          <ul>
            <Bullet>
              Необхідно вивести список міст &quot;картками&quot;. Картка повинна
              містити наступний функціонал:
            </Bullet>
            <Bullet>Коротка інформація про погоду у місті</Bullet>
            <Bullet>
              При натисканні на картку вивести детальну інформацію/перехід на
              сторінку з детальною інформацією
            </Bullet>
            <Bullet>
              На кожній картці міста має бути кнопка: оновити дані про погоду
              зараз. При її натисканні має відбуватися оновлення погоди даного
              міста
            </Bullet>
            <Bullet>
              Має бути можливість додавати/видаляти міста. При додаванні нового
              міста відбувається запит на отримання поточної погоди та виведення
              його на екран.
            </Bullet>
            <Bullet>
              Дані зберігати локально в LocalStorage. При перезавантаженні
              сторінки повинен зберігатися список міст, які раніше були виведені
              користувачем, а дані про погоду повинні бути оновлені.
            </Bullet>
          </ul>
          <Typography variant="h6" component="h3" gutterBottom>
            Буде плюсом:
          </Typography>
          <ul>
            <Bullet>
              На сторінці з детальним поданням реалізувати положення блоку з
              температурою на основі величини значення у вигляді графіку. Для
              цього робити додатковий запит на отримання погодинного прогнозу на
              поточний день.
            </Bullet>
          </ul>
          <Typography variant="h6" component="h3" gutterBottom>
            Вимоги:
          </Typography>
          <ul>
            <Bullet>
              Застосувати Weather API:{" "}
              <a
                href="https://openweathermap.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://openweathermap.org/
              </a>
            </Bullet>
            <Bullet>
              Застосувати React, Typescript, Redux + Redux-Thunk (Рекомендується
              використовувати Redux Toolkit), React-router
            </Bullet>
            <Bullet>
              Застосувати препроцессор CSS. Зробити мобільну версію.
              Рекомендується використовувати SCSS. Для прискорення роботи можна
              використати UI бібліотеки на кшталт Material UI
            </Bullet>
            <Bullet>
              Код повинен бути чистим, зі збереженням форматування.
              Рекомендується використання ESLint/Prettie
            </Bullet>
            <Bullet>
              Покрити тестами основні компоненти за допомогою Jest +
              (react-testing-library/enzyme)
            </Bullet>
            <Bullet>
              Написання компонентів у функціональному стилі із застосуванням
              хуків
            </Bullet>
          </ul>
        </Paper>
      </div>
    </section>
  );
};
