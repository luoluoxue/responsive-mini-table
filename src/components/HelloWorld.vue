<template>
  <div>
    1111111111
    <!-- <div class="rows" v-for="(row, i) in renderData" :key="i">
      <div class="cell" v-for="(td, j) in renderData[i]" :key="j">
        <span style="color:red">{{ td.show(renderData) }}</span>
        <input
          type="checkbox"
          @click="changeStatus(td)"
          :checked="td.type == 'exp'"
        />
        <input type="text" v-model="td.input" />
      </div>
    </div> -->
  </div>
</template>

<script src="./_index.ts" lang="ts"></script>
<style>
.rows {
  width: 100%;
  display: flex;
}
.cell {
  width: 33.33%;
  border: 1px solid #000;
  height: 80px;
  line-height: 80px;
  margin: 0 5px;
}
</style>
