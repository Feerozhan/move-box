/** @type {import('tailwindcss').Config} */
module.exports = {
content: ['./index.html', './src/**/*.{js,jsx}'],
darkMode: 'class',
theme: {
extend: {
colors: {
movebox: {
50: '#f8fafc',
100: '#eef2ff'
}
}
}
},
plugins: []
}