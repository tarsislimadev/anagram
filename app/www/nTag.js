
class nTag {
  container = document.createElement('div')
  element = document.createElement('div')

  options = {
    element: {
      tagName: 'div',
    },
    container: {
      tagName: 'div',
    },
    component: {
      name: 'bug',
    }
  }

  constructor(options) {
    this.options = {
      ...this.options,
      ...options,
    }

    this.build()
  }

  build() {
    if (this.options.element.tagName) {
      this.element = document.createElement(this.options.element.tagName)
    }

    if (this.options.container.tagName) {
      this.container = document.createElement(this.options.container.tagName)
    }

    if (this.options.component.name) {
      this.element.classList.add(`el-${this.options.component.name}`)
      this.container.classList.add(`ct-${this.options.component.name}`)
    }

    this.setStyle('margin', '0')
    this.setStyle('padding', '0')
    this.setStyle('outline', 'none')
    this.setStyle('border', 'none')
    this.setStyle('box-sizing', 'border-box')
  }

  static fromElement(el = document.createElement('')) {
    const bug = new nTag()
    bug.element = el
    return bug
  }

  static fromId(id) {
    return nTag.fromElement(document.getElementById(id))
  }

  setContainerStyle(name, value) {
    this.container.style[name] = value
    return this
  }

  getContainerStyle(name) {
    return this.container.style[name]
  }

  setStyle(name, value) {
    this.element.style[name] = value
    return this
  }

  getStyle(name) {
    return this.element.style[name]
  }

  setAttr(name, value) {
    this.element.setAttribute(name, value)
    return this
  }

  getAttr(name) {
    return this.element.getAttribute(name)
  }

  setText(value) {
    this.element.innerText = value
    return this
  }

  getText() {
    return this.element.innerText
  }

  on(name, value) {
    this.element.addEventListener(name, value.bind(this))
    return this
  }

  once(name, value) {
    this.element.addEventListener(name, value.bind(this), { once: true })
    return this
  }

  setData(name, value) {
    this.element.dataset[name] = value
    return this
  }

  getData(name) {
    return this.element.dataset[name]
  }

  clear() {
    while (this.element.children.length > 0) {
      this.element.children.item(0).remove()
    }

    return this
  }

  append(ntag = new nTag()) {
    this.element.append(ntag.render())
    return this
  }

  render() {
    this.container.append(this.element)
    return this.container
  }
}

class nH1 extends nTag {
  constructor() {
    super({
      component: { name: 'h1' },
    })

    this.setStyle('font-weight', 'bold')
    this.setStyle('font-size', '3rem')
  }
}

class nText extends nTag {
  constructor() {
    super({
      element: { tagName: 'p' },
      component: { name: 'text' },
    })
  }
}

class nNumber extends nTag {
  num = 0

  constructor() {
    super({
      element: { tagName: 'p' },
      component: { name: 'number' },
    })

    this.setNumber(this.num)
  }

  setText() {
    throw new Error('Can not do this.')
  }

  setNumber(num) {
    this.num = num
    super.setText(this.num)
    return this
  }

  add(num = 1) {
    this.num += num
    super.setText(this.num)
    return this
  }

  sub(num = 1) {
    this.num -= num
    super.setText(this.num)
    return this
  }
}

class nButton extends nTag {
  constructor() {
    super({
      element: { tagName: 'button' },
      component: { name: 'button' },
    })

    this.setStyle('border', 'none')
    this.setStyle('outline', 'none')
    this.setStyle('padding', '1rem')
    this.setStyle('font-weight', 'bold')
  }
}

class nLink extends nTag {
  constructor() {
    super({
      element: { tagName: 'a' },
      component: { name: 'link' },
    })

    this.setStyle('text-decoration', 'none')
    this.setStyle('color', 'inherit')
  }

  href(href) {
    this.setAttr('href', href)
    return this
  }
}

class nFlex extends nTag {
  constructor() {
    super({
      component: { name: 'flex' },
    })

    this.setStyle('display', 'flex')
    this.setStyle('justify-content', 'space-between')
  }
}

class nLabel extends nTag {
  constructor() {
    super({
      component: { name: 'label' },
    })

    this.setStyle('padding-top', '0.5rem')
    this.setStyle('padding-botton', '0.5rem')
  }
}

class Valuable extends nTag {

  getValue() {
    return this.element.value
  }

  setValue(value) {
    this.element.value = value
  }

}

class nInputText extends Valuable {
  constructor() {
    super({
      component: { name: 'input-text' },
      element: { tagName: 'input' }
    })

    this.setAttr('type', 'text')

    this.setContainerStyle('display', 'inline-block')
    this.setContainerStyle('width', '100%')

    this.setStyle('padding', '0.5rem')
    this.setStyle('width', '100%')
  }
}

class nInputNumber extends Valuable {
  constructor() {
    super({
      component: { name: 'input-number' },
      element: { tagName: 'input' }
    })

    this.setAttr('type', 'number')

    this.setStyle('padding', '0.5rem')
  }
}

class nInputDate extends nTag {
  flex = new nFlex

  day = new nInputNumber
  month = new nInputNumber
  year = new nInputNumber

  constructor() {
    super({
      component: { name: 'input-date' }
    })

    this.flex.append(this.makeInput(this.day))
    this.flex.append(this.makeSeparator('/'))
    this.flex.append(this.makeInput(this.month))
    this.flex.append(this.makeSeparator('/'))
    this.flex.append(this.makeInput(this.year))

    this.append(this.flex)
  }

  makeInput(input) {
    input.setStyle('width', '100%')
    return input
  }

  makeSeparator(text) {
    const sep = new nText()

    sep.setContainerStyle('width', '1rem')
    sep.setStyle('width', '1rem')

    sep.setStyle('text-align', 'center')
    sep.setStyle('padding-top', '0.5rem')
    sep.setStyle('padding-botton', '0.5rem')

    sep.setText(text)

    return sep
  }

  getValue() {
    return [
      this.day.getValue(),
      this.month.getValue(),
      this.year.getValue(),
    ].map((value) => value.toString())
  }

  setValue(value = []) {
    const [day, month, year] = value
    this.day.setValue(day)
    this.month.setValue(month)
    this.year.setValue(year)
    return this
  }
}

class nInputTime extends nTag {
  flex = new nFlex

  hour = new nInputNumber
  minutes = new nInputNumber

  constructor() {
    super({
      component: { name: 'input-time' }
    })

    this.flex.append(this.makeInput(this.hour))

    const sep = new nTag()
    sep.setText(':')

    sep.setContainerStyle('width', '1rem')

    sep.setStyle('padding-botton', '0.5rem')
    sep.setStyle('padding-top', '0.5rem')
    sep.setStyle('text-align', 'center')
    sep.setStyle('width', '1rem')
    this.flex.append(sep)

    this.flex.append(this.makeInput(this.minutes))

    this.append(this.flex)
  }

  makeInput(input) {
    input.setStyle('width', '100%')
    return input
  }

  getValue() {
    return [
      this.hour.getValue(),
      this.minutes.getValue(),
    ].map((str) => str.toString())
  }

  setValue(value = []) {
    const [hour, minutes] = value
    this.hour.setValue(hour)
    this.minutes.setValue(minutes)
    return this
  }
}

class nError extends nTag {
  constructor() {
    super({
      component: { name: 'error' },
    })

    this.setStyle('color', 'red')
    this.setStyle('padding-top', '0.5rem')
    this.setStyle('padding-botton', '0.5rem')
  }
}

class nCenter extends nTag {
  constructor() {
    super({ component: { name: 'center' } })

    this.setStyle('margin', '0 auto')
    this.setStyle('width', '42rem')
  }
}
