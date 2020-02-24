module.exports = function () {
    $.gulp.task('scripts1', () => {
        return $.gulp.src([ // Берем и отслеживаем все необходимые файлы
                './app/Материалы/src/scripts/**/*.js',
                './app/Материалы/src/scripts/main.js'
            ])
            .pipe($.plugins.sourcemaps.init())
            .pipe($.plugins.concat('scripts.min.js')) // Собираем их в кучу в новом файле
            .pipe($.plugins.terser()) // Сжимаем
            .pipe($.plugins.sourcemaps.write('./'))
            .pipe($.gulp.dest('./build/Материалы/src/scripts'));
    });
};