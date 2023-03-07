export const convertMinsToHrsMins = (mins) => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  h = h < 10 ? `${h}` : h; // (or alternatively) h = String(h).padStart(2, '0')
  m = m < 10 ? `${m}` : m; // (or alternatively) m = String(m).padStart(2, '0')
  return `${h}hrs ${m}min`;
};

export const convertMinsToHrsMinsf = (mins) => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  h = h < 10 ? `${h}` : h; // (or alternatively) h = String(h).padStart(2, '0')
  m = m < 10 ? `${m}` : m; // (or alternatively) m = String(m).padStart(2, '0')
  return `${h}hrs ${m}min`;
};

const SESSION_KEY = 'TMDB-SESSION-ID';

export function setSessionId(id) {
  localStorage.setItem(SESSION_KEY, id);
}
export function getSessionId() {
  return localStorage.getItem(SESSION_KEY) || '';
}
export function deleteSessionId() {
  localStorage.removeItem(SESSION_KEY);
}

export const authVerify = () => {
  const sessionId = getSessionId();
  console.log('authVerify', sessionId !== '');
  return sessionId !== '';
};
