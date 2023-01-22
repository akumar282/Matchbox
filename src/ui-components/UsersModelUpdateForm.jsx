/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UsersModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
}) {
  const labelElement = <Text>{label}</Text>;
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UsersModelUpdateForm(props) {
  const {
    id: idProp,
    usersModel,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    user_name: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    user_creation_date: "",
    dahublink: "",
    saved_posts: [],
    hide_posts: [],
  };
  const [user_name, setUser_name] = React.useState(initialValues.user_name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [password, setPassword] = React.useState(initialValues.password);
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [user_creation_date, setUser_creation_date] = React.useState(
    initialValues.user_creation_date
  );
  const [dahublink, setDahublink] = React.useState(initialValues.dahublink);
  const [saved_posts, setSaved_posts] = React.useState(
    initialValues.saved_posts
  );
  const [hide_posts, setHide_posts] = React.useState(initialValues.hide_posts);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = usersModelRecord
      ? { ...initialValues, ...usersModelRecord }
      : initialValues;
    setUser_name(cleanValues.user_name);
    setEmail(cleanValues.email);
    setPassword(cleanValues.password);
    setFirst_name(cleanValues.first_name);
    setLast_name(cleanValues.last_name);
    setUser_creation_date(cleanValues.user_creation_date);
    setDahublink(cleanValues.dahublink);
    setSaved_posts(cleanValues.saved_posts ?? []);
    setCurrentSaved_postsValue("");
    setHide_posts(cleanValues.hide_posts ?? []);
    setCurrentHide_postsValue("");
    setErrors({});
  };
  const [usersModelRecord, setUsersModelRecord] = React.useState(usersModel);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UsersModel, idProp)
        : usersModel;
      setUsersModelRecord(record);
    };
    queryData();
  }, [idProp, usersModel]);
  React.useEffect(resetStateValues, [usersModelRecord]);
  const [currentSaved_postsValue, setCurrentSaved_postsValue] =
    React.useState("");
  const saved_postsRef = React.createRef();
  const [currentHide_postsValue, setCurrentHide_postsValue] =
    React.useState("");
  const hide_postsRef = React.createRef();
  const validations = {
    user_name: [{ type: "Required" }],
    email: [{ type: "Required" }],
    password: [{ type: "Required" }],
    first_name: [],
    last_name: [],
    user_creation_date: [],
    dahublink: [{ type: "URL" }],
    saved_posts: [],
    hide_posts: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          user_name,
          email,
          password,
          first_name,
          last_name,
          user_creation_date,
          dahublink,
          saved_posts,
          hide_posts,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            UsersModel.copyOf(usersModelRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UsersModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="User name"
        isRequired={true}
        isReadOnly={false}
        value={user_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_name: value,
              email,
              password,
              first_name,
              last_name,
              user_creation_date,
              dahublink,
              saved_posts,
              hide_posts,
            };
            const result = onChange(modelFields);
            value = result?.user_name ?? value;
          }
          if (errors.user_name?.hasError) {
            runValidationTasks("user_name", value);
          }
          setUser_name(value);
        }}
        onBlur={() => runValidationTasks("user_name", user_name)}
        errorMessage={errors.user_name?.errorMessage}
        hasError={errors.user_name?.hasError}
        {...getOverrideProps(overrides, "user_name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_name,
              email: value,
              password,
              first_name,
              last_name,
              user_creation_date,
              dahublink,
              saved_posts,
              hide_posts,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={true}
        isReadOnly={false}
        value={password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_name,
              email,
              password: value,
              first_name,
              last_name,
              user_creation_date,
              dahublink,
              saved_posts,
              hide_posts,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_name,
              email,
              password,
              first_name: value,
              last_name,
              user_creation_date,
              dahublink,
              saved_posts,
              hide_posts,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_name,
              email,
              password,
              first_name,
              last_name: value,
              user_creation_date,
              dahublink,
              saved_posts,
              hide_posts,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <TextField
        label="User creation date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={user_creation_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_name,
              email,
              password,
              first_name,
              last_name,
              user_creation_date: value,
              dahublink,
              saved_posts,
              hide_posts,
            };
            const result = onChange(modelFields);
            value = result?.user_creation_date ?? value;
          }
          if (errors.user_creation_date?.hasError) {
            runValidationTasks("user_creation_date", value);
          }
          setUser_creation_date(value);
        }}
        onBlur={() =>
          runValidationTasks("user_creation_date", user_creation_date)
        }
        errorMessage={errors.user_creation_date?.errorMessage}
        hasError={errors.user_creation_date?.hasError}
        {...getOverrideProps(overrides, "user_creation_date")}
      ></TextField>
      <TextField
        label="Dahublink"
        isRequired={false}
        isReadOnly={false}
        value={dahublink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_name,
              email,
              password,
              first_name,
              last_name,
              user_creation_date,
              dahublink: value,
              saved_posts,
              hide_posts,
            };
            const result = onChange(modelFields);
            value = result?.dahublink ?? value;
          }
          if (errors.dahublink?.hasError) {
            runValidationTasks("dahublink", value);
          }
          setDahublink(value);
        }}
        onBlur={() => runValidationTasks("dahublink", dahublink)}
        errorMessage={errors.dahublink?.errorMessage}
        hasError={errors.dahublink?.hasError}
        {...getOverrideProps(overrides, "dahublink")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              user_name,
              email,
              password,
              first_name,
              last_name,
              user_creation_date,
              dahublink,
              saved_posts: values,
              hide_posts,
            };
            const result = onChange(modelFields);
            values = result?.saved_posts ?? values;
          }
          setSaved_posts(values);
          setCurrentSaved_postsValue("");
        }}
        currentFieldValue={currentSaved_postsValue}
        label={"Saved posts"}
        items={saved_posts}
        hasError={errors.saved_posts?.hasError}
        setFieldValue={setCurrentSaved_postsValue}
        inputFieldRef={saved_postsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Saved posts"
          isRequired={false}
          isReadOnly={false}
          value={currentSaved_postsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.saved_posts?.hasError) {
              runValidationTasks("saved_posts", value);
            }
            setCurrentSaved_postsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("saved_posts", currentSaved_postsValue)
          }
          errorMessage={errors.saved_posts?.errorMessage}
          hasError={errors.saved_posts?.hasError}
          ref={saved_postsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "saved_posts")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              user_name,
              email,
              password,
              first_name,
              last_name,
              user_creation_date,
              dahublink,
              saved_posts,
              hide_posts: values,
            };
            const result = onChange(modelFields);
            values = result?.hide_posts ?? values;
          }
          setHide_posts(values);
          setCurrentHide_postsValue("");
        }}
        currentFieldValue={currentHide_postsValue}
        label={"Hide posts"}
        items={hide_posts}
        hasError={errors.hide_posts?.hasError}
        setFieldValue={setCurrentHide_postsValue}
        inputFieldRef={hide_postsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Hide posts"
          isRequired={false}
          isReadOnly={false}
          value={currentHide_postsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.hide_posts?.hasError) {
              runValidationTasks("hide_posts", value);
            }
            setCurrentHide_postsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("hide_posts", currentHide_postsValue)
          }
          errorMessage={errors.hide_posts?.errorMessage}
          hasError={errors.hide_posts?.hasError}
          ref={hide_postsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "hide_posts")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || usersModel)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || usersModel) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
