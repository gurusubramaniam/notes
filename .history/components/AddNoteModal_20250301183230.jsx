import {View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput} from 'react-native';
import { useState } from 'react';
const AddNoteModal = ({modalvisible, onClose, onAdd}) => {