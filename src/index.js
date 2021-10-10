import './sass/main.scss';
import Template from './templates/cardsTmp.hbs'
import markup from './menu.json'

const themeColor = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme'
}
const refs = {
  themeSwitchToggle: document.querySelector('.theme-switch__toggle'),
  jsMenu: document.querySelector('ul.js-menu'),
  bodyClassList: document.body.classList,
  
}

const markupParser = (jsonArray) => {
  return Template(jsonArray);
}
refs.jsMenu.insertAdjacentHTML('beforeend', markupParser(markup))
toggleSwitcher();
refs.bodyClassList.add(localStorage.getItem('theme') || themeColor.LIGHT);

const themeSwitcher = (e) => {

  localStorage.setItem('checked', refs.themeSwitchToggle.checked)

  if(refs.themeSwitchToggle.checked){
    refs.bodyClassList.remove(themeColor.LIGHT)
    refs.bodyClassList.add(themeColor.DARK)
  }else{
    refs.bodyClassList.remove(themeColor.DARK)
    refs.bodyClassList.add(themeColor.LIGHT)
}
localStorage.setItem('theme', refs.bodyClassList);

}
refs.themeSwitchToggle.addEventListener('change', themeSwitcher)

function toggleSwitcher(){
  let storageChecked = localStorage.getItem('checked')
  if(storageChecked)
  refs.themeSwitchToggle.checked = JSON.parse(storageChecked)
}