import {mount} from 'vue-test-utils'
import InputData from "@/components/DatePicker/InputData";


describe('InputData.test.js', () => {
    let dayCheckIn = "2021-02-20"
    let dayCheckOut = "2021-02-23"

    const wrapper = mount(InputData, {
        propsData: {
            dayCheckIn: dayCheckIn,
            dayCheckOut: dayCheckOut
        }
    })

    it('has the expected number inputs (checkIn and checkOut)', () => {
        expect(wrapper.findAll("div[class=\"input-wrapper\"] > input").length).toBe(2)
    })

    it('has the expected placeholders values', () => {
        expect(
            wrapper.findAll("div[class=\"input-wrapper\"] > input").wrappers[0].attributes().placeholder
        ).toBe("Check In")
        expect(
            wrapper.findAll("div[class=\"input-wrapper\"] > input").wrappers[1].attributes().placeholder
        ).toBe("Check Out")
    })

    it('has the expected onShow behaviour', () => {
        wrapper.vm.onShow("checkIn")
        expect(wrapper.emitted().show[0]).toStrictEqual(["checkIn"])

        wrapper.vm.onShow("checkOut")
        expect(wrapper.emitted().show[1]).toStrictEqual(["checkOut"])
    })

    it('has the expected watcher behaviour (reaction on date change)', () => {
        wrapper.vm.dateCheckIn = "2021-02-01"
        wrapper.vm.$nextTick(() => {
            expect(wrapper.findAll("div[class=\"input-wrapper\"] > input").wrappers[0].element.value).toBe("2021-02-01")
        });

        wrapper.vm.dateCheckOut = "2021-02-06"
        wrapper.vm.$nextTick(() => {
            expect(wrapper.findAll("div[class=\"input-wrapper\"] > input").wrappers[1].element.value).toBe("2021-02-06")
        });

    })
})