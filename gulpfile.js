import gulp from 'gulp';
const { series, src, dest, watch } = gulp;
import imagemin from 'gulp-imagemin';
import notify from 'gulp-notify';
import webp from 'gulp-webp';
import concat from 'gulp-concat';

// Utilidades CSS
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import sourcemaps from 'gulp-sourcemaps';

// Utilidades JS
import terser from 'gulp-terser-js';
import rename from 'gulp-rename';

const paths = {
    imagenes: 'src/img/**/*',
    css: 'src/css/**/*.css',
    js: 'src/js/**/*.js'
}

function css() {
    return src(paths.css)
        .pipe( sourcemaps.init() )
        .pipe( postcss([ autoprefixer(), cssnano() ]))
        .pipe( sourcemaps.write('.') )
        .pipe( dest('./build/css') )
}

function javascript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe( concat('bundle.js') )
        .pipe( terser() )
        .pipe(sourcemaps.write('.'))
        .pipe( dest('./build/js') )
}

function imagenes() {
    return src(paths.imagenes)
        .pipe( imagemin() )
        .pipe( dest( './build/img' ))
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe( webp() )
        .pipe( dest('./build/img'))
}


const ara = series( css, javascript, imagenes, versionWebp );
const now = series( css, javascript)
const watchCss = () => { 
    watch(paths.css, css)
    watch(paths.js, javascript)
}
export{now, watchCss};