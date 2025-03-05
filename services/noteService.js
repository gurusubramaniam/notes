import { use } from 'react';
import databaseService from './databaseService';
import { ID, Query } from 'react-native-appwrite';

// App rite
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
  //get notes
  async getNotes(userId) {
    if (!userId) {
      console.error('User ID is required');
      return { data: [], error: 'User ID is required' };
    }
    try {
      const response = await databaseService.listDocuments(dbId, colId, [
        Query.equal('userId', userId),
      ]);
      return response;
    } catch (error) {
      console.log('Error Fetching Documents', error.message);
      return { data: [], error: error.message };
    }
  },
  async addNotes(userId, text) {
    if (!text) {
      return { error: 'Note text is required' };
    }
    const data = {
      text: text,
      createdAt: new Date().toISOString(),
      userId: userId,
    };
    const response = await databaseService.createDocument(
      dbId,
      colId,
      data,
      ID.unique()
    );
    if (response.error) {
      return { error: response.error };
    }
    return { data: response };
  },
  async updateNote(documentId, text) {
    const data = {
      text: text,
    };
    const response = await databaseService.updateDocument(
      dbId,
      colId,
      documentId,
      data
    );
    if (response.error) {
      return { error: response.error };
    }
    return { success: true };
  },
  async deleteNote(documentId) {
    const response = await databaseService.deleteDocument(
      dbId,
      colId,
      documentId
    );
    if (response.error) {
      return { error: response.error };
    }
    return { success: true };
  },
};

export default noteService;
