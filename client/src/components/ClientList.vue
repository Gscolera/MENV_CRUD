<template>
  <b-container class="pt-md-5 px-0">
    <b-table
      :fields="fields"
      :items="clientsList"
      primary-key="name"
      stacked="md"
      outlined
      id="client-list"
      class="w-100"
      caption-top
    >
      <template v-slot:table-caption class="sdf">
        <b-navbar toggleable type="dark" class="my-0 bg-secondary justify-content-space-between">
          <b-navbar-brand>Clients</b-navbar-brand>
          <span class="d-flex">
            <b-navbar-toggle target="settings">
              <template v-slot:default="{ expanded }">
                <b-icon-chevron-bar-up v-if="expanded" />
                <b-icon-chevron-bar-down v-else />
              </template>
            </b-navbar-toggle>
            <b-btn size="sm" class="ml-2" @click="$bvModal.show('form')">
              <b-icon-person-plus-fill />
            </b-btn>
          </span>
          <b-collapse id="settings" is-nav>
            <b-container class="px-0 py-3">
              <b-row class="w-100 mb-2">
                <b-col cols="12" md="6" class="mb-2 mb-md-0">
                  <b-form-select v-model="sort" :options="sortOptions" class="bg-secondary text-white" size="sm" />
                </b-col>
                <b-col cols="12" md="6">
                  <b-form-select v-model="order" class="bg-secondary text-white" size="sm">
                    <b-form-select-option value="null">---Sort order---</b-form-select-option>
                    <b-form-select-option value="asc">ascending</b-form-select-option>
                    <b-form-select-option value="desc">descending</b-form-select-option>
                  </b-form-select>
                </b-col>
              </b-row>
              <b-row class="w-100">
                <b-col cols="12" md="6" class="mb-2 mb-md-0">
                  <b-form-select 
                    v-model="filterBy" 
                    :options="filterOptions" 
                    @change="filterCLients" 
                    class="bg-secondary text-white" 
                    size="sm" 
                  />
                </b-col>
                <b-col cols="12" md="6">
                  <b-form-input v-model="filter" @input="filterCLients" size="sm"/>
                </b-col>
              </b-row>
            </b-container>
          </b-collapse>
        </b-navbar>
      </template>
      <template v-slot:cell(name)="data">{{ data.item.name }}</template>
      <template v-slot:cell(email)="data">{{ data.item.email }}</template>
      <template v-slot:cell(phone)="data">{{ data.item.phone }}</template>
      <template v-slot:cell(providers)="data">
        <b-container class="d-flex flex-wrap">
        <span v-for="(provider, i) in data.item.providers" :key="provider.id">
          <span>{{ provider.name }}</span>
          <span v-if="i < data.item.providers.length - 1" class="mr-1">,</span>
        </span>
        </b-container>
      </template>
      <template v-slot:cell(actions)="data">
        <b-button-group size="sm">
          <b-btn @click="startClientUpdating(data.item)" variant="light">
            <b-icon-pencil class="bg-secodary" />
          </b-btn>
          <b-btn @click="deleteClient(data.item)" variant="light">
            <b-icon-trash class="bg-secodary" />
          </b-btn>
        </b-button-group>
      </template>
    </b-table>
  </b-container>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { Client } from "@/api";
export default {
  name: "ClientList",
  data: () => ({
    fields: ["Name", "Email", "Phone", "Providers", "Actions"],
    sort: "name",
    order: null,
    filterBy: "name",
    filter: '',
    sortOptions: [
      { value: "name", text: "Sort by name" },
      { value: "email", text: "Sort by email" },
      { value: "phone", text: "Sort by phone" }
    ],
    filterOptions: [
      { value: "name", text: "Filter by name" },
      { value: "email", text: "Filter by email" },
      { value: "phone", text: "Filter by phone" }
    ]
  }),
  computed: {
    ...mapGetters(["clients"]),
    clientsList() {
      let sort = this.sort;

      return this.clients.sort((a, b) => {
        if (a[sort] > b[sort]) return this.order === "desc" ? -1 : 1;
        if (a[sort] < b[sort]) return this.order === "desc" ? 1 : -1;
        return 0;
      });
    }
  },
  methods: {
    filterCLients() {
      let filter = {};
      
      filter[this.filterBy] = this.filter;
     
      Client.filterReq(filter)
        .then(clients => this.saveClients(clients))
        .catch(() => this.$emit('error'));
    },
    deleteClient(client) {
      let message = `Are you sure you want to delete ${client.name}?`;
      let options = {
        title: "Please confirm!",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: "Delete"
      };

      this.$bvModal
        .msgBoxConfirm(message, options)
        .then(value => {
          if (!value) return;

          Client.delete({ id: client._id })
            .then(() => this.removeCLientFromStore(client._id))
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
    },
    startClientUpdating(client) {
      this.rememberClient(client);
      this.$bvModal.show("form");
    },

    ...mapMutations(["removeCLientFromStore", "rememberClient", "saveClients"])
  }
};
</script>