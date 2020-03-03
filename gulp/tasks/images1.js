module.exports = function () {
    $.gulp.task("tiny1", () => { // задача для изображений, но за раз отрабатывает не более 10 изображений
        return $.gulp.src("./app/Материалы/src/images/responsive/**/*.{png,jpg,jpeg,gif}")
            .pipe($.plugins.tinypngWeb({
                verbose: true
            }))
            .pipe($.gulp.dest("./build/images/"));
    });

    $.gulp.task("webp1", () => { // ограничений нет, но обрати внимание на директорию
        return $.gulp.src("./build/Материалы/src/images/**/*.{png,jpg,jpeg,gif}")
            .pipe($.plugins.webp({
                quality: 80
            }))
            .pipe($.gulp.dest("./build/Материалы/src/images/"));
    });

    $.gulp.task("sprite1", () => { // удобнейшая штукаб рекомендую
        return $.gulp.src("./app/Материалы/src/images/sprite/sp-*.svg")
            .pipe($.plugins.svgstore())
            .pipe($.plugins.rename("sprite.svg"))
            .pipe($.gulp.dest("./build/Материалы/src/images/"));
    });

    $.gulp.task("svg:remove1", () => { // перетаскиваем остальные неиспользуемые svg 
        return $.gulp.src("./app/Материалы/src/images/**/*.svg")
            .pipe($.gulp.dest("./build/Материалы/src/images/"));
    });

    // Удобно, но использовать только на изображениях с наивысшим качеством
    // Responsive Images
    const quality = 80; // Responsive images quality

    // Produce @1x images
    $.gulp.task('img-responsive-1x1', async function () {
        return $.gulp.src('./app/Материалы/src/images/pictures/**/*.{png,jpg,jpeg,gif}')
            .pipe($.plugins.newer('./app/Материалы/src/images/responsive/@1x'))
            .pipe($.plugins.responsive({
                '**/*': {
                    width: '50%',
                    quality: quality
                }
            })).on('error', function (e) {
                console.log(e);
            })
            .pipe($.plugins.rename(function (path) {
                path.extname = path.extname.replace('jpeg', 'jpg');
            }))
            .pipe($.gulp.dest('./app/Материалы/src/images/responsive/@1x'));
    });
    // Produce @2x images
    $.gulp.task('img-responsive-2x1', async function () {
        return $.gulp.src('./app/Материалы/src/images/pictures/**/*.{png,jpg,jpeg,gif}')
            .pipe($.plugins.newer('./app/Материалы/src/images/responsive/@2x'))
            .pipe($.plugins.responsive({
                '**/*': {
                    width: '100%',
                    quality: quality
                }
            })).on('error', function (e) {
                console.log(e);
            })
            .pipe($.plugins.rename(function (path) {
                path.extname = path.extname.replace('jpeg', 'jpg');
            }))
            .pipe($.gulp.dest('./app/Материалы/src/images/responsive/@2x'));
    });

    $.gulp.task('img:compress1', $.gulp.series('tiny1', 'webp1'));

    $.gulp.task('img:svg1', $.gulp.series('sprite1', 'svg:remove1'));

    $.gulp.task('img:responsive1', $.gulp.series('img-responsive-1x1', 'img-responsive-2x1'));

    $.gulp.task('images1', $.gulp.series('img-responsive-1x1', 'img-responsive-2x1', 'tiny1', 'webp1', 'sprite1', 'svg:remove1'));
};