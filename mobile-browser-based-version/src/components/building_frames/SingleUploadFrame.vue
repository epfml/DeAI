<template>
  <!-- Upload File Card-->
  <div class="relative">
    <article
      aria-label="File Upload Modal"
      class="relative h-full flex flex-col p-4 bg-white rounded-lg dark:bg-darker"
      v-on:drop="dropHandler"
      v-on:dragover="dragOverHandler"
      v-on:dragleave="dragLeaveHandler"
      v-on:dragenter="dragEnterHandler"
    >
      <span v-if="nbrClasses > 1" class="text-xl font-semibold">
        Label {{ label }}:
      </span>
      <!-- scroll area -->
      <section class="h-full overflow-auto p-8 w-full h-full flex flex-col">
        <header
          class="border-dashed border-2 border-gray-500 dark:border-primary flex flex-col justify-center items-center"
        >
          <p
            class="mb-3 p-4 text-lg font-semibold dark:text-lightflex flex-wrap justify-center"
          >
            <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
          </p>
          <input
            v-bind:id="hiddenInputName"
            type="file"
            multiple
            class="hidden"
          />
          <div class="p-4">
            <button
              v-bind:id="uploadButtonName"
              class="mt-2 p-2 rounded-sm text-white transition-colors duration-200 bg-primary hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
            >
              Upload files
            </button>
          </div>
        </header>

        <!-- If preview of the selected file, display of small preview of selected files -->
        <div v-if="preview">
          <div class="pt-4">
            <h1 class="pt-8 pb-3 font-semibold sm:text-lg dark:text-lightflex">
              Files Selected
            </h1>

            <ul v-bind:id="galleryName" class="flex flex-1 flex-wrap -m-1">
              <li
                v-bind:id="emptyName"
                class="h-full w-full text-center flex flex-col items-center justify-center items-center"
              >
                <img
                  class="mx-auto w-32"
                  src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                  alt="no data"
                />
                <span class="text-small text-gray-500 dark:text-lightflex"
                  >No files selected</span
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- If no preview of the selected file, display the nbr. of uploaded files -->
        <div v-if="!preview">
          <div class="pt-4">
            <h1 class="pt-8 pb-3 font-semibold sm:text-lg dark:text-lightflex">
              Number of selected files: {{ String(nbrUploadedFiles) }}
            </h1>
          </div>
        </div>
      </section>
    </article>
  </div>

  <!-- Upload File Data Template -->
  <template v-bind:id="fileTemplName">
    <li class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
      <article
        tabindex="0"
        class="group w-full h-full rounded-md focus:outline-none focus:shadow-outline elative bg-primary-100 dark:bg-dark focus-within:cursor-pointer relative shadow-sm"
      >
        <img
          alt="upload preview"
          class="img-preview hidden w-full h-full sticky object-cover rounded-md bg-fixed"
        />
        <section
          class="p-2 flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0"
        >
          <h1
            class="flex-1 text-gray-800 group-hover:text-primary dark:text-gray-50 dark:group-hover:text-primary"
          ></h1>
          <div class="flex">
            <span class="p-1 text-gray-800 dark:text-gray-50">
              <i>
                <svg
                  class="fill-current w-4 h-4 ml-auto pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                </svg>
              </i>
            </span>
            <p class="p-1 size text-xs text-gray-800 dark:text-gray-50"></p>
            <button
              class="delete ml-auto focus:outline-none hover:bg-white dark:hover:bg-gray-500 p-1 rounded-md text-gray-800 dark:text-gray-50"
            >
              <svg
                class="pointer-events-none fill-current w-4 h-4 ml-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  class="pointer-events-none"
                  d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                />
              </svg>
            </button>
          </div>
        </section>
      </article>
    </li>
  </template>

  <!-- Upload Image Data Template-->
  <template v-bind:id="imageTemplName">
    <li class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
      <article
        tabindex="0"
        class="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm"
      >
        <img
          alt="upload preview"
          class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed"
        />

        <section
          class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3"
        >
          <h1 class="flex-1"></h1>
          <div class="flex">
            <span class="p-1">
              <i>
                <svg
                  class="fill-current w-4 h-4 ml-auto pt-"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"
                  />
                </svg>
              </i>
            </span>

            <p class="p-1 size text-xs"></p>
            <button
              class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md"
            >
              <svg
                class="pointer-events-none fill-current w-4 h-4 ml-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  class="pointer-events-none"
                  d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                />
              </svg>
            </button>
          </div>
        </section>
      </article>
    </li>
  </template>
</template>

<script>
const hasFiles = ({ dataTransfer: { types = [] } }) =>
  types.indexOf("Files") > -1;

export default {
  name: "SingleUploadFrame",
  props: {
    Id: String,
    Task: Object,

    // the file upload manager associated to the task
    fileUploadManager: Object,

    // preview is used to know if we have to show a snippet of the uploaded files or not
    preview: Boolean,

    // the label associated to the task
    label: String,
  },
  data() {
    return {
      galleryName: "gallery_"
        .concat(String(this.Id))
        .concat("_")
        .concat(String(this.label)),
      fileTemplName: "file-template_"
        .concat(String(this.Id))
        .concat("_")
        .concat(String(this.label)),
      imageTemplName: "image-template_"
        .concat(String(this.Id))
        .concat("_")
        .concat(String(this.label)),
      emptyName: "empty_"
        .concat(String(this.Id))
        .concat("_")
        .concat(String(this.label)),
      hiddenInputName: "hidden-input_"
        .concat(String(this.Id))
        .concat("_")
        .concat(String(this.label)),
      uploadButtonName: "uploadButton_"
        .concat(String(this.Id))
        .concat("_")
        .concat(String(this.label)),
      nbrUploadedFiles: 0,
      fileTempl: null,
      imageTempl: null,
      empty: null,
      gallery: null,
      hidden: null,
      counter: 0,
      nbrClasses: 1,
    };
  },
  methods: {
    addFile(target, file) {
      const isImage = file.type.match("image.*"),
        objectURL = URL.createObjectURL(file);
      if (this.preview) {
        const clone = isImage
          ? this.imageTempl.cloneNode(true)
          : this.fileTempl.cloneNode(true);

        clone.querySelector("h1").textContent = file.name;
        clone.querySelector("li").id = objectURL;
        clone.querySelector(".delete").dataset.target = objectURL;
        clone.querySelector(".size").textContent =
          file.size > 1024
            ? file.size > 1048576
              ? Math.round(file.size / 1048576) + "mb"
              : Math.round(file.size / 1024) + "kb"
            : file.size + "b";

        isImage &&
          Object.assign(clone.querySelector("img"), {
            src: objectURL,
            alt: file.name,
          });

        this.empty.classList.add("hidden");
        target.prepend(clone.firstElementChild);
      }

      this.fileUploadManager.addFile(objectURL, file, this.label);
      this.nbrUploadedFiles += 1;
      console.log(this.label);
    },

    // use to drag dragenter and dragleave events.
    // this is to know if the outermost parent is dragged over
    // without issues due to drag events on its children

    // reset counter and append file to gallery when file is dropped
    dropHandler(ev) {
      ev.preventDefault();
      for (const file of ev.dataTransfer.files) {
        this.addFile(this.gallery, file);
        this.counter = 0;
      }
    },

    // only react to actual files being dragged
    dragEnterHandler(e) {
      e.preventDefault();
      if (!hasFiles(e)) {
        return;
      }
      ++this.counter;
    },

    dragLeaveHandler(e) {
      1 > --this.counter;
    },

    dragOverHandler(e) {
      if (hasFiles(e)) {
        e.preventDefault();
      }
    },
  },
  mounted() {
    if (this.preview) {
      this.gallery = document.getElementById(this.galleryName);
      this.fileTempl = document.getElementById(this.fileTemplName);
      this.imageTempl = document.getElementById(this.imageTemplName);
      this.empty = document.getElementById(this.emptyName);
    }

    // click the hidden input of type file if the visible button is clicked
    // and capture the selected files
    this.hidden = document.getElementById(this.hiddenInputName);
    document.getElementById(this.uploadButtonName).onclick = () =>
      this.hidden.click();
    this.hidden.onchange = (e) => {
      for (const file of e.target.files) {
        this.addFile(this.gallery, file);
      }
    };

    if (this.preview) {
      // event delegation to caputre delete events
      // fron the waste buckets in the file preview cards
      this.gallery.onclick = ({ target }) => {
        if (target.classList.contains("delete")) {
          const ou = target.dataset.target;
          document.getElementById(ou).remove(ou);
          this.gallery.children.length === 1 &&
            this.empty.classList.remove("hidden");
          this.fileUploadManager.deleteFile(ou);
          this.nbrUploadedFiles -= 1;
        }
      };
    }

    if (this.Task.trainingInformation.LABEL_LIST) {
      this.nbrClasses = this.Task.trainingInformation.LABEL_LIST.length;
    }
  },
};
</script>