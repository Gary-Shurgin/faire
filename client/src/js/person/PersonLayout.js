const regions = [
    { id: 'constelation', view: 'Constelation', },
    { id: 'midlands',     view: 'Midlands', },
    { id: 'pentamere',    view: 'Pentamere', },
    { id: 'nOaken',       view: 'North Oaken', },
    { id: 'sOaken',       view: 'South Oaken', },
]

const companions = [
    { id: 'chivilary',    view: 'Chivilary', },
    { id: 'laurel',       view: 'Laruel', },
    { id: 'pelican',      view: 'Pelican', },
    { id: 'defender',     view: 'Defender', },
]

const ranks = [
    { id: 'captain',      view: 'Captain', },
    { id: 'warder',       view: 'Warder', },
    { id: 'forrester',    view: 'Forrester', },
]

export const fields = [
    { id: 'scaName',    required: true,  label: 'SCA Name', focus: 'autoFocus' },
    { id: 'modernName', required: true,  label: 'Modern Name', },
    { id: 'cellPhone',  required: true,  label: 'Cell Phone', },
    { id: 'eMail',      required: true,  label: 'E-mail', },
    { id: 'password',   required: true,  label: 'Password', },
    { id: 'notes',      required: false, label: 'Notes', type: 'textbox'},
    { id: 'region',     required: true,  label: 'Region', type: 'select', items: regions, },
    { id: 'companions', required: false, label: 'Companion of', type: 'group', items: companions, },
    { id: 'ranks',      required: false, label: 'Rank', type: 'group', items: ranks, },
]

