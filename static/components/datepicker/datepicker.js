//создаем класс с именем Datepicker
class DatePicker {
    //создаем и иницилизируем своейства класcа
    constructor(currentDate = DatePicker.getDefaultDate(), title) {
        //свойства объекта
        this.currentDate = currentDate
        this.initSelector = '.datepicker'
        //нижнее подчеркивание указывает на то что сво-во личное
        this._show = false
        //объевляем статическое свойство
        DatePicker.count += 1
        this.title = title
    }
    //геттеры сеттеры
    get show() {
        //если значени свойства _show true возвращаем 1, иначе 2
        return this._show === true ? '1' : '2'
    }

    set show(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._show = value
        } else {
            console.error('Ошибка!')
        }
    }

    //объевляем метод
    showDatepicker() {
        this.show = true
        console.log(`Сегоднешнее число ${this.currentDate}`)
    }

    //статический метод
    static getDefaultDate() {
        return new Date()
    }
}

class SubDatePicker extends DatePicker {
    //если у подкласса нет constructor он использует родительский
    constructor(currentDate, title, foo) {
        //если указываем конструктор то нужно вызвать родительский конструктор с помощью super()
        super(currentDate,title)
        this.foo = foo
    }

    //перезаписываем метод родителя
    showDatepicker() {
        this.show = true
        let date =  new Date(98, 1)
        console.log(`Сегоднешнее число ${date}`)
    }

}

let datepicker = new DatePicker(new Date(), '123')
let subdatepicker = new SubDatePicker(new Date(), '321', '123123')

datepicker.showDatepicker()
subdatepicker.showDatepicker()

console.log(datepicker)
console.log(subdatepicker)