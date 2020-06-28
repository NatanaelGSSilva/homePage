<template>
  <div class="container">
    <h2>
      Inclusão de Véiculos
      <button class="btn btn-warning float-right" @click="goBack">
        <i class="fas fa-undo-alt"></i>Voltar
      </button>
    </h2>
    <form @submit.prevent="salvar">
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="modelo">Modelo do Veículo</label>
            <input
              type="text"
              id="modelo"
              class="form-control"
              required
              v-model="carro.modelo"
              ref="modelo"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="cor">Cor:</label>
            <input type="text" id="cor" class="form-control" required v-model="carro.cor" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="marca_id">Marca:</label>
            <select id="marca_id" class="form-control" required v-model="carro.marca_id">
              <option v-for="marca in marcas" :key="marca.id" :value="marca.id">{{marca.nome}}</option>
            </select>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="preco">Preço R$</label>
            <input type="text" id="preco" class="form-control" required v-model="carro.preco" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group">
            <label for="ano">Ano:</label>
            <input type="text" id="ano" class="form-control" required v-model="carro.ano" />
          </div>
        </div>
        <div class="col-sm-9">
          <div class="form-group">
            <label for="foto">Url da Foto:</label>
            <input type="text" id="foto" class="form-control" required v-model="carro.foto" />
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-success px-4 mr-2">
        <i class="far fa-save mx-1"></i>Salvar
      </button>
      <button type="reset" class="btn btn-danger px-4">
        <i class="far fa-window-restore mx-1"></i>Limpar
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      carro: {
        id: null,
        modelo: null,
        marca_id: null,
        ano: null,
        preco: null,
        cor: null,
        foto: null,
        destaque: "x"
      },
      marcas: null
    };
  },
  methods: {
    salvar() {
      if (localStorage.getItem("token")) {
        axios
          .post(this.$urlAPI + "/carros", this.carro, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(response =>
            alert(`Ok! Carro cadastrado com código ${response.data.id}`)
          );
        this.carro = {};
        this.$refs.modelo.focus();
      } else {
        alert("Erro... Usuario deve estar logado para incluir veiculos");
      }
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  mounted() {
    axios
      .get(this.$urlAPI + "/marcas")
      .then(response => (this.marcas = response.data));
  }
};
</script>

<style scoped>
</style>

