module.exports = function () {
    $.gulp.task('server', () => {
        $.bs.init({
            server: {
                baseDir: "./build" // отслеживаемая директория и старт сервера
            },
            notify: false, // уведомления отключены
            port: 3000,
            // browser: "google chrome" // можешь задать любой браузер
        });
        $.gulp.watch('./app/pug/**/*.pug', $.gulp.parallel('pug')); // отслеживаемые директории
        $.gulp.watch('./app/Материалы/**/*.pug', $.gulp.parallel('pug1'));
        $.gulp.watch('./app/scss/**/*.{scss,sass}', $.gulp.parallel('styles'));
        $.gulp.watch('./app/Материалы/**/*.{scss,sass}', $.gulp.parallel('styles1'));
        $.gulp.watch('./app/scripts/**/*.js', $.gulp.parallel('scripts'));
        $.gulp.watch('./app/Материалы/**/*.js', $.gulp.parallel('scripts1'));
        $.gulp.watch([
            './build/**/*.html',
            './build/scripts/**/*.js'
        ]).on('change', $.bs.reload); // перезагрузка страницы при изменениях в отслеживаемой директории сервера
    });
};