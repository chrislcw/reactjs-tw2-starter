import _ from "lodash"

export const _findOption = (list, id) => {
  return list.find((option) => {
    return _.isObject(option.value)
      ? _objectIsEqual(option.value, id)
      : String(option.value) === String(id)
  })
}

export const _getNiceStringDate = (date) => {
  var month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  return (
    date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()
  )
}

export const _getFormatAPIDate = (rawDate) => {
  const date = new Date(rawDate)

  if (date === undefined) {
    return ""
  }
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
}

export const _buildFormData = (formData, data, parentKey) => {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File) &&
    !(data instanceof Blob)
  ) {
    Object.keys(data).forEach((key) => {
      _buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      )
    })
  } else {
    const value = data == null ? "" : data

    formData.append(parentKey, value)
  }
}

export const _makeId = (length) => {
  var result = ""
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const _difference = (object, base) => {
  return _.transform(object, (result, value, key) => {
    if (!_.isEqual(value, base[key])) {
      result[key] =
        _.isObject(value) && _.isObject(base[key])
          ? _.difference(value, base[key])
          : value
    }
  })
}

export const _objectIsEqual = (object, base) => {
  return _.isEmpty(_difference(object, base))
}

export const _combinePageAndSortParams = (page, sort) => {
  let params = ""

  if (page > 0) {
    params += "page=" + page
  }

  if (params !== "") {
    params += "&"
  }

  params += "sort=" + sort.column + ":" + sort.order

  return params
}

export const _capitalizeFirstCharacter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const _getChartDataset = (param) => {
  if (param.length <= 0) {
    return {}
  }

  const labels = param.map((single) => {
    return single.label.split(" ")[0] + "\r\n" + single.label.split(" ")[1]
  })

  const data = param.map((single) => {
    return single.value
  })

  return {
    labels: labels,
    datasets: [
      {
        barPercentage: 0.5,
        barThickness: 20,
        maxBarThickness: 40,
        minBarLength: 2,
        data: data,
        backgroundColor: "#777",
        hoverBackgroundColor: "#222",
      },
    ],
  }
}

// export const _forceNumeric = (type, value) => {
//   let temp = null

//   if (type === "text") {
//     temp = value
//   } else {
//     temp = value.replace(/[^0-9\\.]/g, "")
//   }

//   return temp
// }

// export const _redirectCheck = (role) => {
//   let navigateTo
//   if (role) {
//     switch (role) {
//       case "admin":
//       case "superadmin":
//         navigateTo = "/about"
//         break
//       default:
//         navigateTo = "/about"
//         break
//     }
//   }
//   return navigateTo
// }

// export const _genDummyOptions = (answers, other) => {
//   if (answers === null) {
//     return []
//   }

//   let temp = answers.map((answer) => {
//     return { value: answer, label: answer }
//   })

//   if (other === "yes") {
//     temp.push({ value: "Other", label: "Other" })
//   }

//   return temp
// }

// export const _getFileExtension = (type) => {}

// export const _processFormError = (errors) => {
//   if (!_.isEmpty(errors)) {
//     return produce([], (draft) => {
//       errors.forEach((error, index) => {
//         let errorMessage = error.message
//         if (_.isArray(error.message)) {
//           errorMessage = error.message.join("<br>")
//         }
//         draft[error.index] = errorMessage
//       })
//     })
//   }
//   return []
// }
