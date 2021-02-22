import { mount } from 'vue-test-utils'
import App from '../src/App'

describe('App.test.js', () => {
    it('has the expected application name', () => {
        let wrapper = mount(App)
        expect(wrapper.name()).toEqual("App")
    })
})
