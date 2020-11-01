<template>
  <div>
    <div class="my-16 split-two">
      <div>
        <div
          class="text-h4 font-weight-bold mb-3"
          v-text="'Общие сведения'"
        ></div>
        <div class="info-line">
          <div>Адрес объекта</div>
          <div>{{ objectMocked.address }}</div>
        </div>
        <div class="info-line">
          <div>Вид строительства</div>
          <div>{{ objectMocked.buildingType }}</div>
        </div>
        <div class="info-line">
          <div>Источник финансирования</div>
          <div>{{ objectMocked.investor }}</div>
        </div>
        <div class="info-line">
          <div>Проект</div>
          <div>{{ objectMocked.project }}</div>
        </div>
        <div class="info-line">
          <div>Плановый срок сдачи</div>
          <div>{{ objectMocked.deadline }}</div>
        </div>
      </div>
      <div>
        <v-img
          contain
          src="../assets/passport.png"
          transition="scale-transition"
          width="300"
        />
      </div>
    </div>
    <div class="my-16 split-two">
      <div>
        <div
          class="text-h4 font-weight-bold mb-3"
          v-text="'Денежные показатели'"
        ></div>
        <div class="info-line">
          <div>Бюджет</div>
          <div>{{ objectMocked.budget }}</div>
        </div>
        <div class="info-line">
          <div>Состояние оплаты</div>
          <div>{{ `${objectMocked.paymentPercentage}%` }}</div>
        </div>
        <div class="mt-4">
          <v-progress-linear
            :value="objectMocked.paymentPercentage"
            color="#5B9BD5"
            height="16"
          >
            <template v-slot:default="{ value }">
              <strong>{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>
        </div>
      </div>
      <div>
        <v-progress-circular
          :rotate="360"
          :size="300"
          :width="32"
          :value="objectMocked.buildingPercentage"
          color="#5B9BD5"
        >
          {{ `Завершено ${objectMocked.buildingPercentage}%` }}
        </v-progress-circular>
      </div>
    </div>
    <v-divider />
    <div class="mt-12 d-flex">
      <div class="pdf-file">
        <v-img
          contain
          src="../assets/pdf.png"
          transition="scale-transition"
          height="64"
          width="64"
        />
        <div class="mt-2">Проект</div>
      </div>
      <div class="ml-4 pdf-file">
        <v-img
          contain
          src="../assets/pdf.png"
          transition="scale-transition"
          height="64"
          width="64"
        />
        <div class="mt-2">Смета</div>
      </div>
      <div class="ml-4 pdf-file">
        <v-img
          contain
          src="../assets/pdf.png"
          transition="scale-transition"
          height="64"
          width="64"
        />
        <div class="mt-2">Численность</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ObjectInfo',
  props: {
    company: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      objectMocked: {
        name: 'ООО Застройщик',
        address: 'Москва, кремль',
        buildingType: 'Инвестиционная застройка',
        investor: 'г. Москва',
        project: 'ППС-12',
        deadline: '20.12.2030',
        budget: '100 000 000',
        paymentPercentage: 8,
        buildingPercentage: 75
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.info-line {
  display: flex;
  & > :first-child {
    width: 300px;
  }
}
.split-two {
  display: flex;
  justify-content: space-between;
}
.pdf-file {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
