# Использование CSS-файлов

## 1. Использованный метод и его основные особенности

В этой версии проекта используется классический метод стилизации с помощью CSS-файлов. Основные особенности:
1) Стили хранятся в отдельных файлах с расширением .css.
2) Подключение осуществляется через тег `<link>` в HTML-файле.
3) Правила CSS применяются ко всем элементам, имеющим соответствующие селекторы.
4) Возможны конфликты стилей, если классы не именованы уникально.
5) Хорошо подходит для глобальной стилизации проекта.

## 2. Инструкции по запуску проекта

1) Нужно убедиться, что установлен Node.js и пакетный менеджер (npm).
2) Откроbv терминал и перейдите в директорию проекта `cd 01_css`.
3) Установите зависимости, выполнив команду: `npm install`
4) Запустите проект командой:`npm run dev`
5) Проект откроется в браузере, и стили будут применены из CSS-файлов.

## 3. Сценарии использования данного метода стилизации
Используется в простых проектах, где нет необходимости в динамической или компонентной стилизации.
Подходит для небольших сайтов и лендингов, где стилизация глобальна и не требует сложных конфигураций.