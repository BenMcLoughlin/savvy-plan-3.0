

export const delete_action = (id, reducer) => ({                                      //deletes an unnested object from a reducer using the id
   type: `${reducer}/DELETE`,
   id,
})

export const setKeyValue_action = (key, reducer, value) => ({                          //this sets simple key value pair, for instance if I just want to change birthYear which is a simple object I would use this
    type: `${reducer}/SET_KEY_VALUE`,
    key,
    value
})
                               
export const setNestedKeyValue_action = (childKey, parentKey, reducer, value) => {
 console.log((childKey, parentKey, reducer, value));
    return   ({  //this sets nested key value pair, for instance if I just want to change mini range bar value, which is a nested object
    type: `${reducer}/SET_NESTED_KEY_VALUE`,
    childKey,                                                                        // child key in the key value pair of the object nested within the parent object, 
    parentKey,                                                                       // parent key is the key to the lower level child object
    value
})
}