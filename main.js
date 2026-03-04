// Custom Blockly Theme for QUREO-like appearance
const qureoTheme = Blockly.Theme.defineTheme('qureo', {
    'base': Blockly.Themes.Zelos,
    'blockStyles': {
        'event_blocks': {
            'colourPrimary': '#99C733',
            'colourSecondary': '#85AE25',
            'colourTertiary': '#70951C'
        },
        'action_blocks': {
            'colourPrimary': '#F25265',
            'colourSecondary': '#D94A5B',
            'colourTertiary': '#BF4250'
        },
        'loop_blocks': {
            'colourPrimary': '#FCAA33',
            'colourSecondary': '#E6992E',
            'colourTertiary': '#CC8829'
        }
    },
    'categoryStyles': {
        'basic_category': {
            'colour': '#61B2E4'
        }
    },
    'componentStyles': {
        'workspaceBackgroundColour': '#FFFFFF',
        'toolboxBackgroundColour': '#F4F9FF',
        'toolboxForegroundColour': '#333',
        'flyoutBackgroundColour': '#F4F9FF',
        'flyoutForegroundColour': '#333',
        'flyoutOpacity': 1,
    }
});

// Custom Blockly Blocks for MakeCode Demo

// 1. チャットコマンド $$ を入力した時
Blockly.Blocks['chat_command'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("チャットコマンド \"")
            .appendField(new Blockly.FieldTextInput("run"), "COMMAND")
            .appendField("\" を入力した時");
        this.appendStatementInput("DO")
            .setCheck(null);
        this.setStyle('event_blocks');
        this.setTooltip("チャットコマンドを入力した時に実行されます。");
        this.setHelpUrl("");
    }
};

// Direction Options
const DIRECTION_OPTIONS = [
    ["前", "前"],
    ["後ろ", "後ろ"],
    ["左", "左"],
    ["右", "右"],
    ["上", "上"],
    ["下", "下"]
];

const TURN_DIRECTION_OPTIONS = [
    ["左", "左"],
    ["右", "右"]
];

// 2. エージェントを $$ に $$ ブロック移動させる (Red)
Blockly.Blocks['agent_move'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("エージェントを")
            .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS), "DIRECTION")
            .appendField("に")
            .appendField(new Blockly.FieldNumber(1, 1), "DISTANCE")
            .appendField("ブロック移動させる");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('action_blocks');
        this.setTooltip("エージェントを指定した方向に移動させます。");
        this.setHelpUrl("");
    }
};

// 3. エージェントの向きを $$ に変える (Red)
Blockly.Blocks['agent_turn'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("エージェントの向きを")
            .appendField(new Blockly.FieldDropdown(TURN_DIRECTION_OPTIONS), "DIRECTION")
            .appendField("に変える");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('action_blocks');
        this.setTooltip("エージェントの向きを変えます。");
        this.setHelpUrl("");
    }
};

// 4. くりかえし $$ 回 (Orange)
Blockly.Blocks['repeat_n'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("くりかえし")
            .appendField(new Blockly.FieldNumber(1, 1), "TIMES")
            .appendField("回");
        this.appendStatementInput("DO")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('loop_blocks');
        this.setTooltip("中のブロックを指定した回数だけ繰り返します。");
        this.setHelpUrl("");
    }
};

// 5. エージェントに $$ を破壊させる (Red)
Blockly.Blocks['agent_destroy'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("エージェントに")
            .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS), "DIRECTION")
            .appendField("を破壊させる");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('action_blocks');
        this.setTooltip("エージェントの指定した方向のブロックを破壊します。");
        this.setHelpUrl("");
    }
};

// 6. エージェントに $$ に置かせる (Red)
Blockly.Blocks['agent_place'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("エージェントに")
            .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS), "DIRECTION")
            .appendField("に置かせる");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('action_blocks');
        this.setTooltip("エージェントの指定した方向にブロックを置きます。");
        this.setHelpUrl("");
    }
};

// 7. エージェントのスロット番号 $$ を有効にする (Red)
Blockly.Blocks['agent_slot'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("エージェントのスロット番号")
            .appendField(new Blockly.FieldNumber(1, 1), "SLOT")
            .appendField("を有効にする");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('action_blocks');
        this.setTooltip("エージェントのアクティブなインベントリスロットを設定します。");
        this.setHelpUrl("");
    }
};

// Initialize Blockly Workspace
document.addEventListener("DOMContentLoaded", function () {
    var workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        renderer: 'zelos',
        theme: qureoTheme,
        trashcan: true,
        scrollbars: true,
        move: {
            scrollbars: true,
            drag: true,
            wheel: true
        },
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
        }
    });
});
