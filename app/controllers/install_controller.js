let test = new Pragma()
                .createEvent('yeet')
                .on('yeet', () => console.log('yeeeeted by a fucking pragma'))
                .triggerEvent('yeet')

console.log('installed', test)