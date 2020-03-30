// new Vue({
//     el: "#app",
//     data: {
//         counter: 0
//     },
//     methods: {
//         clickHandler: function(step) {
//             this.counter += step;
//         }
//     }
// })

// new Vue({
//     el: "#coordinates",
//     data: {
//         x: 0,
//         y: 0
//     },
//     methods: {
//         updateCoordinates: function(event) {
//             this.x = event.clientX,
//             this.y = event.clientY
//         }
//     }
// })

// new Vue({
//     el: "#events",
//     methods: {
//         alertMe: function(event) {
//             alert(event.target.value)
//         }
//     }
// })

// new Vue({
//     el: "#two-way-binding",
//     data: {
//         name: "Prashant"
//     },
//     methods: {
//         updateName: function(x, y, event) {
//             this.name = event.target.value;
//         }
//     }
// })

// new Vue({
//     el: "#computed-properties",
//     data: {
//         counter: 0,
//         secondCounter: 0
//     },
//     computed: {
//         getCounterComputed: function() {
//             console.log("Get counter computed");
//             return this.counter;
//         }
//     },
//     methods: {
//         getCounterMethod: function() {
//             console.log("Get counter method");
//             return this.counter;
//         },
//         incrementCounter: function() {
//             console.log("counter increment");
//             this.counter++;
//         },
//         incrementSecondCounter: function() {
//             console.log("second counter increment");
//             this.secondCounter++;
//         }
//     }
// })

// new Vue({
//     el: "#watch",
//     data: {
//         counter: 0
//     },
//     watch: {
//         counter: function(value) {
//             console.log(value);
//             // const vi = this;
//             setTimeout(() => {
//                 this.counter = 0;
//             }, 3000);
//         }
//     },
//     methods: {
//         incrementCounter: function() {
//             this.counter++;
//         }
//     }
// })

// new Vue({
//     el: "#classes",
//     data: {
//         attachRed: false
//     },
//     watch: {
//         attachRed: function(value) {
//             console.log(value)
//         }
//     },
//     methods: {
//         onClick: function() {
//             console.log(123)
//         }
//     }
// })

// new Vue({
//     el: "#ifelse",
//     data: {
//         num: 1,
//         showTemplate: false,
//         showBox: false
//     }
// })

// new Vue({
//     el: "#for",
//     data: {
//         animals: ['Dog', 'Cat', 'Snake', 'Horse'],
//         persons: [
//             { name: 'Prashant', age: 35 },
//             { name: 'Pradeep', age: 30 },
//             { name: 'Pramod', age: 25 },
//             { name: 'Prakash', age: 65 },
//             { name: 'Sharada', age: 55 }
//         ]
//     }
// })

// var vm1 = new Vue({
//     el: "#vm1",
//     data: {
//         title: "Vue instance 1"
//     },
//     methods: {
//         updateInstance2Title: function() {
//             console.log(12)
//             vm2.title = "Updated instance 2 title"
//             console.log(vm2);
//         }
//     }
// })

// var vm2 = new Vue({
//     el: "#vm2",
//     data: {
//         title: "Vue instance 2"
//     },
//     watch: {
//         title: function() {
//             console.log("Title changed")
//         }
//     }
// })

// setTimeout(() => {
//     vm2.$refs.heading.innerText = 'Testing';
//     // console.log(vm2)
// }, 3000);

// // setTimeout(() => {
// //    vm2.title =  "Vue instance 2";
// // }, 4000);

// vm2.newProp = "New Prop";
// console.log(vm2);

// var vm3 = new Vue({
//     // data: {
//     //     title: "Vue instance 3"
//     // },
//     template: "<h2>Vue instance 3 mounted</h2>"
// })

// // vm3.$mount("#mount")
// console.log(vm3)
// vm3.$mount();
// console.log(vm3)
// document.getElementById("mount").appendChild(vm3.$el)

new Vue({
    el: "#hooks",
    data: {
        title: "Hooks practice"
    },
    methods: {
        onDestroy: function() {
            this.$destroy();
        }
    },
    beforeCreate: function() {
        alert('Before created');
    },
    created: function() {
        alert('Created');
    },
    beforeMount: function() {
        alert('Before mount');
    },
    mounted: function() {
        alert('Mounted')
    },
    beforeUpdate: function() {
        alert('Before update');
    },
    updated: function() {
        alert('Updated')
    },
    beforeDestroy: function() {
        alert('Before destroy');
    },
    destroyed: function() {
        alert('Destroyed')
    }
})