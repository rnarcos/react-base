const PREFIX = 'app';
export const BOILERPLATE_ACTION_TYPE = `${PREFIX}.BOILERPLATE_ACTION_TYPE`;

export function boilerplateAction(payload) {
  return {
    payload,
    type: BOILERPLATE_ACTION_TYPE,
  };
}
