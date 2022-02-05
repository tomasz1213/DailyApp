import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts} from '../utility/fonts';
import {colors} from '../utility/colors';
import {useSelector, useDispatch} from 'react-redux';
import {setTodoDone} from '../store/reducer/todo';
import {TODO_SELECTORS} from '../store/selectors/todo';

export const Todo = ({navigation}) => {
  const {todo} = useSelector(TODO_SELECTORS.getToDo);
  const dispatch = useDispatch();
  const [buttonColor, setButtonColor] = useState({
    backgroundColor: colors.purple.light,
  });

  const handleTaskDone = () => {
    setButtonColor({backgroundColor: colors.purple.purple});
    setTimeout(() => {
      dispatch(setTodoDone(todo?.ready[0]));
      setButtonColor({backgroundColor: colors.purple.light});
    }, 1000);
  };
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Todo')}>
      <View style={styles.container}>
        {todo.ready[0] ? (
          <Text style={styles.todoText}>- {todo?.ready[0]?.title}</Text>
        ) : (
          <Text style={styles.todoText}>- Please add task</Text>
        )}
        <TouchableOpacity
          style={{...styles.done, ...buttonColor}}
          onPress={() => handleTaskDone()}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 70,
    marginVertical: '5%',
    marginHorizontal: '5%',
  },
  todoText: {
    color: 'white',
    fontFamily: fonts.ibm_regular,
    fontSize: 20,
  },
  done: {
    position: 'absolute',
    marginTop: 10,
    right: 20,
    width: 15,
    height: 15,
    borderRadius: 20,
  },
});
