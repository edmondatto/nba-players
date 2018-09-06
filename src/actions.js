export const GET_PLAYER = 'GET_PLAYER';
export const GET_PLAYER_SUCCESS = 'GET_PLAYER_SUCCES';
export const GET_PLAYER_FAIL = 'GET_PLAYER_FAIL';

export function getPlayer(firstName, surname) {
  return {
    type: GET_PLAYER,
    payload: { firstName, surname }
  }
}

