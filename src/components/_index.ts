import { ref, computed, watchEffect, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  setup() {
    let renderData = computed(() => {
      return inputValArr.value;
    });

    let inputValArr = ref([
      [new Td("1"), new Td("2"), new Td("3")],
      [new Td("4"), new Td("5"), new Td("6")],
      [
        new Td("sum(select([0,0],[0,1],[0,2]))", "exp"),
        new Td("sum(select([1,0],[1,1],[1,2]))", "exp"),
        new Td("sum(select([2,0],[2,1]))", "exp"),
      ],
    ]);
    function changeStatus(td: Td) {
      if (td.type === "text") {
        td.type = "exp";
      } else {
        td.type = "text";
      }
    }
    return {
      renderData,
      inputValArr,
      changeStatus,
    };
  },
});
function eval1(p: string, table: Td[][]) {
  function sum(a: number[]) {
    let count = 0;
    a.forEach((e: number) => {
      count += e;
    });
    return count;
  }
  function select(...arr: [number, number][]) {
    return arr.map((val) => {
      return Number(table[val[0]][val[1]].show(table));
    });
  }

  return eval(p);
}

class Td {
  show(table: Td[][]) {
    if (this.type === "text") {
      return this.input;
    } else {
      return eval1(this.input, table);
    }
  }
  constructor(public input: string, public type: "text" | "exp" = "text") {}
}
