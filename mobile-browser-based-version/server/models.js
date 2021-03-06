const tf = require('@tensorflow/tfjs')


function createTitanicModel() {
    let model = tf.sequential()
    model.add(tf.layers.dense({
        inputShape: [8],
        units: 124,
        activation: "relu",
        kernelInitializer: "leCunNormal",
    }))
    model.add(tf.layers.dense({ units: 64, activation: "relu" }))
    model.add(tf.layers.dense({ units: 32, activation: "relu" }))
    model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }))
    model.summary()
    return model
    // Do we want to save models on disk? Currently sits in RAM.
    /*const save_path_db = "indexeddb://working_".concat(
        training_information.model_id
    );
    await model.save(save_path_db);*/
}

function createMnistModel() {
    return null
}

const titanicModel = createTitanicModel()
const mnistModel = createMnistModel()

module.exports = {
    models: new Map([
        ['titanic', titanicModel],
        ['mnist', mnistModel],
    ])
}
