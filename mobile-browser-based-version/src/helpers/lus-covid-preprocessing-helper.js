import * as tf from '@tensorflow/tfjs';

const IMAGE_H = 28;
const IMAGE_W = 28;
const IMAGE_SIZE = IMAGE_H * IMAGE_W;
const NUM_CLASSES = 2;
const LABEL_LIST = ["COVID-Positive","COVID-Negative"]
//const SITE_POSITIONS = ["QAID", "QAIG", "QASD", "QASG", "QLD", "QLG", "QPID", "QPIG", "QPSD"]
const SITE_POSITIONS = ["QAID", "QAIG", "QASD", "QASG", "QLD", "QLG", "QPID", "QPIG", "QPSD", "QPSG", "QPG"]
// Data is passed under the form of Dictionary{ImageURL: label}
export default function data_preprocessing(training_data){
    const labels = []
    const image_uri = []
    const image_names = []

    Object.keys(training_data).forEach(key => {
        labels.push(training_data[key].label)
        image_names.push(training_data[key].name)
        image_uri.push(key)
    });

    const preprocessed_data = getTrainData(image_uri, labels, image_names);    
    
    return preprocessed_data
}
function image_preprocessing(src){

    // Fill the image & call predict.
    let imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.width = IMAGE_W;
    imgElement.height = IMAGE_H;

    // tf.browser.fromPixels() returns a Tensor from an image element.
    const img = tf.browser.fromPixels(imgElement).toFloat();

    const offset = tf.scalar(127.5);
    // Normalize the image from [0, 255] to [-1, 1].
    const normalized = img.sub(offset).div(offset);

    // Reshape to a single-element batch so we can pass it to predict.
    const batched = normalized.reshape([1, IMAGE_H, IMAGE_W, 3]);

    return batched
}

function labels_preprocessing(labels){
    const nb_labels = labels.length
    const labels_one_hot_encoded = []
    labels.forEach(label =>
        labels_one_hot_encoded.push(one_hot_encode(label))
    )
    
    console.log(labels_one_hot_encoded)
    return tf.tensor2d(labels_one_hot_encoded, [nb_labels, NUM_CLASSES])
}

function one_hot_encode(label){
    const result = []
    for (let i = 0; i < LABEL_LIST.length; i++){
        if(LABEL_LIST[i]==label){
            result.push(1)
        }else{
            result.push(0)
        }
    }
    return result
}

  /**
   * Get all training data as a data tensor and a labels tensor.
   *
   * @returns
   *   xs: The data tensor, of shape `[numTrainExamples, 28, 28, 1]`.
   *   labels: The one-hot encoded labels tensor, of shape
   *     `[numTrainExamples, 2]`.
   */
   function getTrainData(image_uri, labels_preprocessed, image_names) {
    const dict_images = {}
    const dict_labels = {}

    for(let i = 0; i<image_names.length; ++i){
        const id = image_names[i].split("_")[0]
        if(!(id in dict_images)){
            dict_images[id] = {}
            dict_labels[id] = labels_preprocessed[i]
        }
        const site = image_names[i].split("_")[1]
        dict_images[id][site]=image_uri[i]
    }

    const image_tensors1 = []
    for(let id in dict_images){
        const image_tensors2 = []
        for(let site in SITE_POSITIONS){
            if(site in dict_images[id]){
                const image_uri = dict_images[id][site]
                image_tensors2.push(image_preprocessing(image_uri))
            }else{
                image_tensors2.push(tf.zeros([1, IMAGE_H, IMAGE_W, 3]))
            }
        }
        image_tensors1.push(tf.concat(image_tensors2, 1))
    }
    
    // Do feature preprocessing
    const labels_to_process = []
    for(let id in dict_labels){
        labels_to_process.push(dict_labels[id])
    }
    console.log(labels_to_process)
    const labels = labels_preprocessing(labels_to_process)
    const image_tensors = []
    
    image_uri.forEach( image => 
      image_tensors.push(image_preprocessing(image))
    )

    console.log("end")
    console.log(image_tensors1)
    console.log(labels)
    const xs = tf.concat(image_tensors1, 0)
    
    return {xs, labels};
  }