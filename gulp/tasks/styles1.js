module.exports = function () {
    $.gulp.task('styles1', () => {
        return $.gulp.src('./app/Материалы/src/scss/*.{scss,sass}')
            .pipe($.plugins.sourcemaps.init()) // инициализируем карту для стилевых файлов
            .pipe($.plugins.sass({
                errorLogToConsole: true, // ошибки выводим в консоль
                outputStyle: "compressed" // сжатие css
            }))
            .on('error', console.error.bind(console))
            .pipe($.plugins.purgecss({ // плагин, который очищает неиспользуемые селекторы, внимательнее с динамичесскими классами
                content: ['./build/**/*.html'], // отслеживаемая директория
                whitelistPatterns: [/show$/, /mobile/, /active/, /hidden/, /menu-desctop/] // здесь указываешь динамически добавляемые селекторы
            }))
            .pipe($.plugins.autoprefixer({ // прописываем вендорные префиксы
                cascade: true
            }))
            .pipe($.plugins.csso()) // минифицируем стилевой файл
            .pipe($.plugins.rename({
                suffix: '.min'
            })) // переименовываем
            .pipe($.plugins.sourcemaps.write('./')) // записываем карту
            .pipe($.gulp.dest('./build/Материалы/src/styles')) // кидаем в директорию сервера
            .pipe($.bs.stream()); // мягкая перезагрузка сервера, без обновления страницы 
    });
};